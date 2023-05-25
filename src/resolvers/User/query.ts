import { builder } from '../../builder'
import { UserType } from '../../models/User'
import { db } from '../../context'

builder.queryFields((t) => ({
  User: t.field({
    type: UserType,
    nullable: true,
    resolve: async () => await db.selectFrom('User').selectAll().executeTakeFirst(),
  }),
}))
