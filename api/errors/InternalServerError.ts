export class InternalServerError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
    this.name = 'InternalServerError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export default InternalServerError;
