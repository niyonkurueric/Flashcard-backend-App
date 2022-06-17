import { extendType, nonNull, stringArg } from 'nexus';
import { getAlluser, getOneUser } from "./Resolve";
export const QueryUser = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllUser", {
            type: "Users",
            resolve: getAlluser,
        });
        t.nonNull.field("getOneUser", {
            type: "Users",
            args: {
                email: nonNull(stringArg())
            },
            resolve: getOneUser
        })
    },
});
