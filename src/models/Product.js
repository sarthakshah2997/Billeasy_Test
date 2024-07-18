const knex = require('../knexfile');

class Product {
    static async create(data) {
        const {name, description, category, price, available, approval_code} = data;
        if(price > 1000 && !approval_code) {
            throw new Error('Approval code is required for expensive product');
        }

        const [product] = await knex('products')
            .insert({name, description, category, price, available})
            .returning('*');
        return product;
    }
}

module.exports = Product;