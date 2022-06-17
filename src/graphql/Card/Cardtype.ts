import { objectType } from 'nexus';
export const Card = objectType({
  name: 'Cards',
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("question"),
      t.nonNull.string("answer")
  },
})