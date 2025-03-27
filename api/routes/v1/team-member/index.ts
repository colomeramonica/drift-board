import { list } from './list';
import { create } from './create';
import { FastifyTypedInstance } from '../../../types';

export async function membersRoutes(app: FastifyTypedInstance) {
  await list(app);
  await create(app);
}
