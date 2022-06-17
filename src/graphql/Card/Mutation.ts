import { extendType, nonNull, stringArg, intArg, nullable } from 'nexus';
import { createNewCard, deleteCard, updateCard } from './Resolver';
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
    t.nonNull.field("deleteCard", {
      type: "String",
      args: {
        id: nonNull(intArg()),
      },
      resolve: deleteCard
    })
    t.nonNull.field("UpdateCard", {
      type: "Cards",
      args: {
        id: nonNull(intArg()),
        answer: nullable(stringArg()),
        question: nullable(stringArg())
      },
      resolve: updateCard
    })
  },
})