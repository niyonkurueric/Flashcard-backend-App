import { extendType, intArg, nonNull } from 'nexus';
import { getAllCards, getOneCard, getOwnCards } from './Resolver';
export const QueryCard = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("getAllCard", {
      type: "Cards",
      resolve: getAllCards,
    })
    t.nonNull.field("getOneCard", {
      type: "Cards",
      args: {
        id: nonNull(intArg())
      },
      resolve: getOneCard,
    })
    t.nonNull.list.field("getOwnCards", {
      type: "Cards",
      resolve: getOwnCards
    })
  },
})