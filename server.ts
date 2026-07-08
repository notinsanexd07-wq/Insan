import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit to support potentially large configuration states (e.g. customized base64 images)
  app.use(express.json({ limit: '50mb' }));

  // API Route to save active configuration state permanently back to src/defaultConfig.ts
  app.post("/api/save-config", (req, res) => {
    try {
      const config = req.body;
      if (!config || typeof config !== 'object') {
        return res.status(400).json({ error: "Invalid config object" });
      }

      const filePath = path.join(process.cwd(), 'src', 'defaultConfig.ts');
      
      // Serialize configuration into a full valid TypeScript defaultConfig file
      const fileContent = `import { SiteConfig } from './types';

export const DEFAULT_CONFIG: SiteConfig = ${JSON.stringify(config, null, 2)};
`;

      fs.writeFileSync(filePath, fileContent, 'utf-8');
      console.log("[Server] Configuration synced and saved successfully to src/defaultConfig.ts");
      return res.json({ success: true });
    } catch (error: any) {
      console.error("[Server] Failed to save config:", error);
      return res.status(500).json({ error: error.message || "Failed to save configuration" });
    }
  });

  // Serve static assets or use Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[Server] Vite development middleware mounted");
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("[Server] Production static server mounted for path: " + distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Portfolio backend running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
