import { extendType, nonNull, objectType, stringArg, intArg, inputObjectType, enumType, arg, list } from "nexus";
import { getAllCards, getOneCard, getOwnCards } from './Resolver';
export const QueryCard = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("getAllCard", {
      type: "Cards",
      args: {
        orderBy: arg({ type: "Sort" }),
      },
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
      args: {
        orderBy: arg({ type: "Sort" }),
      },
      resolve: getOwnCards
    })
  },
})