const request = require('supertest');
const app = require('../app');
const knex = require('../knexfile');

describe('POST /products', () => {
    it('should create a new product', async () => {
        const response = await request(app)
            .post('/products')
            .send({
                name: 'New Product',
                description: 'A new product',
                category: 'electronics',
                price: 199.99,
                available: true,
            });
        expect(response.status).to.equal(200);
        expect(response.body).to.be.have.property('id');
    });

    it('should retun an error if required field are missing', async() =>{
     const response = await request(app).post('/products')
         .send({
             name: 'New Product'
         });
     expect(response.status).to.equal(400);
    });
})