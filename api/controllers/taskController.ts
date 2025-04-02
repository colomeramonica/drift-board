import { TaskRepository } from '../repositories/taskRepository';
import { TaskFilter, TaskRequest, TaskUpdateRequest } from '../types';

export class TaskController {
  static async listTasks(filters: TaskFilter) {
    return await TaskRepository.listTasks(filters);
  }

  static async createTask(task: TaskRequest) {
    return await TaskRepository.newTask(task);
  }

  static async updateTask(taskId: string, task: TaskUpdateRequest) {
    return await TaskRepository.updateTask(taskId, task);
  }

  static async deleteTask(taskId: string) {
    return await TaskRepository.deleteTask(taskId);
  }

  static async deleteAllTasks() {
    return await TaskRepository.deleteAllTasks();
  }
}
