const request = require('supertest');
const app = require('../app');
const knex = require('../knexfile');

describe('GET /customers/orders', () => {
    before(async ()=>{
        await knex.migrate.latest();
        await knex.seed.run();
    });
    it('should fetch a weekly breakDown or orders for customers', async () => {
        const response = await request(app)
            .get('/customer/orders');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        response.body.forEach((order) => {
            expect(order).to.be.have.property('customer_name');
            expect(order).to.be.have.property('customer_email');
            expect(order).to.be.have.property('total_amount');
            expect(order).to.be.have.property('total_orders');
        });
    });
});