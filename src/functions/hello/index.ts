import { handlerPath } from 'src/utils/handlerResolver';

export default {
  name: `\${sls:stage}-hello`,
  description: 'Hello World',
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: '/graphql',
      },
    },
  ],
};
