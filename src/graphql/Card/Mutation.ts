import { extendType, nonNull, stringArg } from 'nexus';
import { createNewCard } from './Resolver';
export const cardMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("creatNewCard", {
      type: "Cards",
      args: {
        question: nonNull(stringArg()),
        answer: nonNull(stringArg()),
      },
      resolve: createNewCard
    })
  },
})