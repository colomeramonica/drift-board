import mongoose from 'mongoose';
import { app } from '../../../../server';

describe('PATCH /task/:taskId', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should update a task and return 200', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/task/67e59887d8f27409afbc6e51',
      payload: { status: 'In Progress' },
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body).toHaveProperty('message', 'Task updated successfully!');
    expect(body).toHaveProperty('task');
  });
});
