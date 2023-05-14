const request = require('supertest');
const app = require('./app');

describe('auth API v1 ', () => {
  describe('GET /login success', () => {
    it('should return "Hello, world!"', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Hello, world!');
    });
  });

  // Test the POST route
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const user = { name: 'John Doe', email: 'johndoe@example.com' };
      const res = await request(app).post('/users').send(user);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(user);
    });
  });
});