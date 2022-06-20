"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const nexus_1 = require("nexus");
exports.User = (0, nexus_1.objectType)({
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
            });
    },
});
//# sourceMappingURL=User.js.map