import { objectType } from "nexus";
import { uniqueCard } from "./Resolve";
export const User = objectType({
  name: "Users",
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("names"),
      t.nonNull.string("email"),
      t.nonNull.string("password"),
      t.nonNull.list.nonNull.field("cards", {
        type: "Cards",
        resolve: uniqueCard
      })
  },
})