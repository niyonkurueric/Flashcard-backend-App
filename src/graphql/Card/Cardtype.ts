import { extendType, nonNull, objectType, stringArg, intArg, inputObjectType, enumType, arg } from "nexus";
export const Card = objectType({
  name: 'Cards',
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("question"),
      t.nonNull.string("answer")
  },
})
export const Sort = enumType({
  name: "Sort",
  members: ["asc", "desc"],
});