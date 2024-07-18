const knex = require('../knexfile');

class Customer {
    static async fetchWeeklyOrders() {
        return knex('orders')
            .select('customer.name as customer_name', 'customer.email as customer_email', knex.raw('EXTRACT(WEEk FROM orders.created_at) as week_number'),
                knex.raw('SUM(orders.total_amount) as total_amount'),
                knex.raw('COUNT(orders.id) as total_orders'))
            .join('customers', 'orders.customer_id', 'customer.id')
            .groupBy('customers.id', 'week_number')
            .orderBy('week_number');
    }
}

module.exports = Customer;