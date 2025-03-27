import { ZodError } from 'zod';

export class BadRequestError extends Error {
  public issues: ZodError['issues'];
  public statusCode: number;

  constructor(message: string, issues: ZodError['issues']) {
    super(message);
    console.error('BadRequestError:', message, issues);
    this.issues = issues;
    this.statusCode = 400;
    this.name = 'BadRequestError';
    Object.setPrototypeOf(this, BadRequestError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export default BadRequestError;
