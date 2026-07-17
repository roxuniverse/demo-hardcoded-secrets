const express = require('express');
const usersRoute = require('./src/routes/users');
const paymentRoute = require('./src/routes/payment');

const app = express();
app.use(express.json());
app.use('/api', usersRoute);
app.use('/api', paymentRoute);

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));