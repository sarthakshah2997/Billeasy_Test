const express = require('express');
const router = express.Router();
const knex = require('../knexfile');
const User = require('../models/User');

router.get('/', async (req, res) => {
    try{
        const {role, active, page=1, limit=10, sort ='created_at'} = req.query;

        const users = await User.fetchAll({
            role,
            active,
            page,
            limit,
            sort,
        });
        res.json(users);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;