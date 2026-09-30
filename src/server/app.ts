import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import projectRoutes from './routes/project.routes.js';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

// Security & Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Permet les scripts Vite et Google Fonts
}));
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Status route
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API Portfolio Exaucé Banza opérationnelle',
    timestamp: new Date().toISOString()
  });
});

// Serve static client bundle
const clientDist = path.join(__dirname, '../../dist/client');
app.use(express.static(clientDist));
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

// Global Error Handler
app.use(errorHandler);

export default app;
