import { objectType } from "nexus";
export const User = objectType({
  name: "Users",
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("names"),
      t.nonNull.string("email"),
      t.nonNull.string("password"),
      t.nonNull.list.nonNull.field("cards", {
        type: "Cards",
        resolve(parent, args, context) {
          return context.prisma.user
            .findUnique({ where: { id: parent.id } })
            .cards();
        },
      })
  },
})