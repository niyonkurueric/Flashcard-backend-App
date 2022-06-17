import { extendType } from "nexus";
import { getAlluser } from "./Resolve";
export const QueryUser = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllUser", {
            type: "Users",
            resolve: getAlluser,

        });
    },
});