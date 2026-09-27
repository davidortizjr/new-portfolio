const express = require('express');
const pool = require('../db');

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { name, email, message, company } = req.body || {};

  if (company) {
    return res.status(201).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (String(message).length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  try {
    await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [String(name).trim().slice(0, 200), String(email).trim().slice(0, 200), String(message).trim()]
    );

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Failed to save contact message', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again in a moment.' });
  }
});

module.exports = router;
