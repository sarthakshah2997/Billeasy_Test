const express = require('express');
const router = express.Router();
const knex = require('../knexfile');
const Product = require('../models/Product');


router.post('/products', async (req, res) => {
    try {
        const [product] = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        return res.status(500).json({erro: err.message});
    }
});

module.exports = router;