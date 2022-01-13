import { ServiceError } from 'src/utils/errors/ServiceError';

export const getHelloWorld = (): string => {
  try {
    return 'Hello World';
  } catch (err) {
    throw new ServiceError(err.message, 400);
  }
};
