import type {
  FastifyBaseLogger,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

export type FastifyTypedInstance = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  ZodTypeProvider
>;

export type UserInterface = {
  id: string;
  name: string;
  email: string;
};

export type TasksInterface = {
  id: string;
  title: string;
  description: string;
  due_date: date;
  assignee: User;
  priority: enum;
  status: enum;
};
