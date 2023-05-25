import { builder } from './builder'

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => 'world',
    }),
  }),
})

export * from './models'
export * from './resolvers'

export const schema = builder.toSchema()