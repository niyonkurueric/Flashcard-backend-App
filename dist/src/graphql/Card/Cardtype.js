"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const nexus_1 = require("nexus");
exports.Card = (0, nexus_1.objectType)({
    name: 'Cards',
    definition(t) {
        t.nonNull.int("id"),
            t.nonNull.string("question"),
            t.nonNull.string("answer");
    },
});
//# sourceMappingURL=Cardtype.js.map