import { extendType, intArg, nonNull } from 'nexus';
import { getAllCards, getOneCard } from './Resolver';
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
  },
})