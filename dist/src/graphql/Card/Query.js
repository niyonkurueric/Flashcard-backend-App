"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCard = void 0;
const nexus_1 = require("nexus");
const Resolver_1 = require("./Resolver");
exports.QueryCard = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllCard", {
            type: "Cards",
            resolve: Resolver_1.getAllCards,
        });
        t.nonNull.field("getOneCard", {
            type: "Cards",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)())
            },
            resolve: Resolver_1.getOneCard,
        });
        t.nonNull.list.field("getOwnCards", {
            type: "Cards",
            resolve: Resolver_1.getOwnCards
        });
    },
});
//# sourceMappingURL=Query.js.map