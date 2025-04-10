import { list } from './list';
import { create } from './create';
import { FastifyTypedInstance } from '../../../types';
import { update } from './update';
import { deleteAll, deleteTask } from './delete';

export async function tasksRoutes(app: FastifyTypedInstance) {
  await list(app);
  await create(app);
  await update(app);
  await deleteTask(app);
  await deleteAll(app);
}
