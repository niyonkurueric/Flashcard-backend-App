"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkMutation = void 0;
const nexus_1 = require("nexus");
const Resolve_1 = require("./Resolve");
exports.LinkMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createNewUser", {
            type: "Users",
            args: {
                names: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolve_1.createNewUser
        });
    },
});
//# sourceMappingURL=MutationUser.js.map