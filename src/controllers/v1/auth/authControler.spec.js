const request = require('supertest');
const app = require('../../../app');

describe('auth API v1 ', () => {
  it('should GET success"', async () => {
    const res = await request(app).get('/api/v1/auth');
    expect(res.statusCode).toBe(200);
  });
});