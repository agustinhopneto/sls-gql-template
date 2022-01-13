import { ApolloServer } from 'apollo-server-lambda';
import { middyfy } from 'src/utils/middy';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const handler = apolloServer.createHandler();

export const main = middyfy(handler);
