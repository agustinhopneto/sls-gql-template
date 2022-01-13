import { getHelloWorld } from './service';

const helloWorld = (): string => {
  return getHelloWorld();
};

export const resolvers = {
  Query: {
    helloWorld,
  },
};
