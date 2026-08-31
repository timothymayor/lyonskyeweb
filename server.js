import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Enquiry endpoint
app.post('/api/enquiries', (req, res) => {
  const enquiry = {
    ...req.body,
    recipient: 'contact@lyonskyeoffshore.com',
    receivedAt: new Date().toISOString()
  };
  console.log('Received enquiry for contact@lyonskyeoffshore.com:', enquiry);
  res.status(201).json({ success: true, message: 'Enquiry received and routed to contact@lyonskyeoffshore.com', data: enquiry });
});

// SPA fallback for routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
