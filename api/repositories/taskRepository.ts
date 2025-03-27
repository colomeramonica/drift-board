import { Task } from '../schemas/mongoose/task';
import { TaskFilter, TaskRequest, TaskUpdateRequest } from '../types';
import { Types } from 'mongoose';

export class TaskRepository {
  static listTasks(filters: TaskFilter) {
    const query = Task.find().populate('responsible');

    if (filters.status) {
      query.where('status', filters.status);
    }

    if (filters.priority) {
      query.where('priority', filters.priority);
    }

    return query.exec();
  }

  static newTask(task: TaskRequest) {
    const responsibleId = new Types.ObjectId(task.responsible);
    return Task.create({
      ...task,
      responsible: responsibleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static updateTask(taskId: string, task: TaskUpdateRequest) {
    const id = new Types.ObjectId(taskId);
    return Task.findByIdAndUpdate(id, { ...task, updatedAt: new Date() });
  }

  static deleteTask(taskId: string) {
    const id = new Types.ObjectId(taskId);
    return Task.findByIdAndDelete(id);
  }
}
