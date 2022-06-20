"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.SignupResolver = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const key_1 = require("../../utils/key");
const SignupResolver = async (parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const existingUser = await context.prisma.user.findUnique({
        where: {
            email: args.email
        }
    });
    if (existingUser)
        throw new Error("user with this email already exist");
    const newUser = await context.prisma.user.create({
        data: {
            email: args.email,
            names: args.names,
            password
        }
    });
    const token = jwt.sign({ userId: newUser.id }, key_1.APP_SECRET);
    return { token, user: newUser };
};
exports.SignupResolver = SignupResolver;
const login = async (parent, args, context) => {
    const existingUser = await context.prisma.user.findUnique({
        where: { email: args.email }
    });
    if (!existingUser)
        throw new Error("user email not found");
    const isPasswordValid = await bcrypt.compare(args.password, existingUser.password);
    if (!isPasswordValid)
        throw new Error("invalid credentials");
    const token = jwt.sign({ userId: existingUser.id }, key_1.APP_SECRET);
    return { token, user: existingUser };
};
exports.login = login;
//# sourceMappingURL=Resolver.js.map