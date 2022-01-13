import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import type { Handler } from 'aws-lambda';

export const middyfy = (handler: Handler) =>
  middy(handler).use(httpErrorHandler());
