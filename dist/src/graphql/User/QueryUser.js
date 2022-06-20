"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUser = void 0;
const nexus_1 = require("nexus");
const Resolve_1 = require("./Resolve");
exports.QueryUser = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllUser", {
            type: "Users",
            resolve: Resolve_1.getAlluser,
        });
        t.nonNull.field("getOneUser", {
            type: "Users",
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve: Resolve_1.getOneUser
        });
    },
});
//# sourceMappingURL=QueryUser.js.map