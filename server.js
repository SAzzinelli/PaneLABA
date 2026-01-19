import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Log per debug
console.log('Environment PORT:', process.env.PORT);
console.log('Using PORT:', PORT);

const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

// Verifica che la cartella dist esista
if (!existsSync(distPath)) {
  console.error(`ERROR: dist folder not found at ${distPath}`);
  console.error('Please run: npm run build');
  process.exit(1);
}

if (!existsSync(indexPath)) {
  console.error(`ERROR: index.html not found at ${indexPath}`);
  console.error('Please run: npm run build');
  process.exit(1);
}

console.log(`Serving static files from: ${distPath}`);
console.log(`Index file at: ${indexPath}`);

// Servi i file statici dalla cartella dist
app.use(express.static(distPath, {
  etag: true,
  lastModified: true,
  maxAge: '1d'
}));

// Tutte le route vanno a index.html (SPA)
app.get('*', (req, res) => {
  console.log(`Serving index.html for route: ${req.path}`);
  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Serving from: ${distPath}`);
  console.log(`🌐 Access the app at: http://0.0.0.0:${PORT}`);
});

// Gestione errori
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
