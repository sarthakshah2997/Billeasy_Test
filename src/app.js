const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);

module.exports = app;