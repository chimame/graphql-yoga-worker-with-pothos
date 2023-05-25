import { builder } from '../../builder'
import { UserType } from '../../models/User'
import { connection } from '../../context'

builder.queryFields((t) => ({
  User: t.field({
    type: UserType,
    nullable: true,
    resolve: async () => {
      const db = connection()
      return await db.selectFrom('User').selectAll().executeTakeFirst()
    },
  }),
}))
