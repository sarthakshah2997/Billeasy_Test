const request = require('supertest');
const app = require('../app');
const knex = require('../knexfile');

describe('GET /users', () => {
    it('should fetch a list of users with role-based and activity status', async () => {
        const response = await request(app).get('/users?role=admin&active=true&page=1&limit=10&sort=created_at');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.at.most(10);
    });
})