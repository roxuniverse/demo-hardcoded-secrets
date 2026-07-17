const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');

router.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from('users').insert([{ name, email }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;