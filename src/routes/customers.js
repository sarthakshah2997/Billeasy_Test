const express = require('express');
const router = express.Router();
const knex = require('../knexfile');
const Customer = require('../models/Customer');

router.get('/orders', async(req, res) => {
    try {
        const orders = await Customer.fetchWeeklyOrders()
        res.json(orders);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;