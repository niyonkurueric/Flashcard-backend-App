import { Context, context } from '../../context';
const getAlluser = async (parent: any, args: any, context: Context) => {
  const AllUsers = await context.prisma.user.findMany()
  return AllUsers
}
const createNewUser = async (parent: any, args: any, context: Context) => {
  const newUser = await context.prisma.user.create({
    data: {
      email: args.email,
      password: args.password,
      names: args.name
    }
  })
  return newUser
}
export { getAlluser, createNewUser }