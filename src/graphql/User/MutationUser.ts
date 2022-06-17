import { extendType, nonNull, stringArg } from "nexus";
import { createNewUser } from "./Resolve";
export const LinkMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createNewUser", {
            type: "Users",
            args: {
                names: nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: createNewUser
        });
    },
});