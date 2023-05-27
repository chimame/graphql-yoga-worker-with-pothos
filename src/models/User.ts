import { AllSelection } from 'kysely/dist/cjs/parser/select-parser';
import { builder } from '../builder';
import { DB } from '../types';

export const UserType = builder.objectRef<AllSelection<DB, 'User'>>('User');

UserType.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', { nullable: true }),
    email: t.exposeString('email'),
    initial: t.string({
      nullable: true,
      resolve: (user) => user.name?.slice(0, 1),
    }),
  }),
});
