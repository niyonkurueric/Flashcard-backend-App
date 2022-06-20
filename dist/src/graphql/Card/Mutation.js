"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardMutation = void 0;
const nexus_1 = require("nexus");
const Resolver_1 = require("./Resolver");
exports.cardMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("creatNewCard", {
            type: "Cards",
            args: {
                question: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                answer: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolver_1.createNewCard
        });
        t.nonNull.field("deleteCard", {
            type: "String",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: Resolver_1.deleteCard
        });
        t.nonNull.field("UpdateCard", {
            type: "Cards",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
                answer: (0, nexus_1.nullable)((0, nexus_1.stringArg)()),
                question: (0, nexus_1.nullable)((0, nexus_1.stringArg)())
            },
            resolve: Resolver_1.updateCard
        });
    },
});
//# sourceMappingURL=Mutation.js.map