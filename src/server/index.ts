import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  🚀 Serveur Portfolio Exaucé Banza prêt !
  📡 Mode: ${process.env.NODE_ENV || 'development'}
  🔗 API Endpoint: http://localhost:${PORT}/api/health
  `);
});

