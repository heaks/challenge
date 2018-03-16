const request = require('supertest');

describe('Requests', () => {
  test('Get table', async () => {
    const response = await request('http://localhost:3001').get('/');
    expect(response.statusCode).toBe(200);
  });
  test('Post empty content', async () => {
    const response = await request('http://localhost:3001').post('/').send({ content: '' });
    expect(response.statusCode).toBe(403);
  })
});