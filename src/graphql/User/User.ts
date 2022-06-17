import { objectType } from "nexus";
export const User=objectType({
  name:"Users",
  definition(t) {
    t.nonNull.int("id"),
    t.nonNull.string("name"),
    t.nonNull.string("email"),
    t.nonNull.string("password")
  },
})