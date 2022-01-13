export class ServiceError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = JSON.stringify({
      message,
      statusCode,
    });
    this.statusCode = statusCode;
  }
}
