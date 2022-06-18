import { objectType } from 'nexus';
import { postedByUser } from './Resolver';
export const Card = objectType({
  name: 'Cards',
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("question"),
      t.nonNull.string("answer"),
      t.nonNull.field("user", {
        type: "Users",
        resolve: postedByUser,
      })
  },
})