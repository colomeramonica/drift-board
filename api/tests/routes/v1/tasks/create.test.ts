import mongoose from 'mongoose';
import { app } from '../../../../server';

describe('POST /task/', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });
  beforeAll(async () => {
    jest.clearAllMocks();
  });

  it('should create a task and return 201', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/task',
      body: {
        title: 'New Task',
        description: 'this is a new very important task',
        dueDate: new Date(
          Date.now() + Math.floor(Math.random() * 10000000000)
        ).toISOString(),
        priority: 3,
        status: 'Open',
        responsible: '67e44490beaf51c0646e0a1a',
      },
    });

    expect(response.statusCode).toBe(201);
    const body = JSON.parse(response.body);
    expect(body).toHaveProperty('message', 'Task created successfully!');
  });

  it('should not allow create a task with due date in the past', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/task',
      body: {
        title: 'New Task',
        description: 'this is a new very important task',
        dueDate: '2025-03-07T12:41:41.939Z',
        priority: 3,
        status: 'Open',
        responsible: '67e44490beaf51c0646e0a1a',
      },
    });

    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);
    expect(body).toHaveProperty('message', 'Validation error');
  });
});
