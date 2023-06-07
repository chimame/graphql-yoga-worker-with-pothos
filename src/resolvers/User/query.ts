import { builder } from '../../builder'
import { UserType } from '../../models/User'

builder.queryFields((t) => ({
  User: t.field({
    type: UserType,
    nullable: true,
    resolve: async (_root, _args, ctx) => {
      return await ctx.db.selectFrom('User').selectAll().executeTakeFirst()
    },
  }),
}))
