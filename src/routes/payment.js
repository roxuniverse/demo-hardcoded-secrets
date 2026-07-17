const express = require('express');
const router = express.Router();
const stripe = require('../lib/stripe');

router.post('/checkout', async (req, res) => {
  const { amount, currency } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: currency || 'usd',
  });
  res.json({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;