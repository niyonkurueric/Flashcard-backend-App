"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = exports.createNewUser = exports.getAlluser = void 0;
const getAlluser = async (parent, args, context) => {
    const AllUsers = await context.prisma.user.findMany();
    return AllUsers;
};
exports.getAlluser = getAlluser;
const createNewUser = async (parent, args, context) => {
    const newUser = await context.prisma.user.create({
        data: {
            email: args.email,
            password: args.password,
            names: args.names
        }
    });
    return newUser;
};
exports.createNewUser = createNewUser;
const getOneUser = async (parent, args, context) => {
    const existingUser = await context.prisma.user.findUnique({
        where: {
            email: args.email
        }
    });
    if (!existingUser)
        throw new Error("user with this email not found");
    return existingUser;
};
exports.getOneUser = getOneUser;
//# sourceMappingURL=Resolve.js.map