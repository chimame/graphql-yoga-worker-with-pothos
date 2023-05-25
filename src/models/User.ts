import { builder } from '../builder'

export const UserType = builder.simpleObject('User', {
  fields: (t) => ({
    id: t.int(),
    name: t.string({ nullable: true }),
    email: t.string(),
  }),
})
