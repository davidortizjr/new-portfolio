const express = require('express');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();

app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/contact', contactRouter);

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
