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

export type TaskRequest = {
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: number;
  status: 'Open' | 'Ready to Dev' | 'In Progress' | 'Completed';
  responsible: string;
};

export type TaskFilter = {
  status?: 'Open' | 'Ready to Dev' | 'In Progress' | 'Completed';
  priority?: number;
  tags?: string[];
};

export type MemberRequest = {
  name: string;
  email: string;
  avatar?: string;
};

export type TaskUpdateRequest = {
  status?: 'Open' | 'Ready to Dev' | 'In Progress' | 'Completed';
  responsible?: string;
  dueDate?: Date;
  priority?: number;
};
