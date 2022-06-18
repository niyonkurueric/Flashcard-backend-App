import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../../utils/key";
import { Context, context } from '../../context';
import { User } from '../User/User';

const SignupResolver = async (parent: any, args: any, content: Context) => {
  const password = await bcrypt.hash(args.password, 10);
  const existingUser = await context.prisma.user.findUnique({
    where: {
      email: args.email
    }
  })
  if (existingUser) throw new Error("user with this email already exist");
  const newUser = await context.prisma.user.create({
    data: {
      email: args.email,
      names: args.names,
      password
    }
  })
  const token = jwt.sign({ userId: newUser.id }, APP_SECRET);
  return { token, user: newUser }
}

const login = async (parent: any, args: any, context: Context) => {
  const existingUser = await context.prisma.user.findUnique({
    where: { email: args.email }
  })
  if (!existingUser) throw new Error("user email not found");
  const isPasswordValid = await bcrypt.compare(
    args.password,
    existingUser.password
  )
  if (!isPasswordValid) throw new Error("invalid credentials");
  const token = jwt.sign({ userId: existingUser.id }, APP_SECRET);
  return { token, user: existingUser }
}
export { SignupResolver, login }