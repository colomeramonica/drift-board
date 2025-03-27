import { list } from './list';
import { create } from './create';
import { FastifyTypedInstance } from '../../../types';
import { update } from './update';

export async function tasksRoutes(app: FastifyTypedInstance) {
  await list(app);
  await create(app);
  await update(app);
}
