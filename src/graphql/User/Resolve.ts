import { Context, context, prisma } from '../../context';
const getAlluser = async (parent: any, args: any, context: any) => {
  const AllUsers = await context.prisma.user.findMany()
  return AllUsers
}
const createNewUser = async (parent: any, args: any, context: any) => {
  const newUser = await context.prisma.user.create({
    data: {
      email: args.email,
      password: args.password,
      names: args.names
    }
  })
  return newUser
}
const getOneUser = async (parent: any, args: any, context: any) => {
  const existingUser = await context.prisma.user.findUnique({
    where: {
      email: args.email
    }
  })
  if (!existingUser) throw new Error("user with this email not found");
  return existingUser
}

export { getAlluser, createNewUser, getOneUser }