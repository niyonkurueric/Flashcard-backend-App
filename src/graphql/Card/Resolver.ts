import { Context } from '../../context';
const getAllCards = async (parent: any, args: any, context: Context) => {
  const allCards = await context.prisma.card.findMany()
  return allCards
}
const getOneCard = async (parent: any, args: any, context: Context) => {
  const existingCard = await context.prisma.card.findUnique({
    where: {
      id: args.id
    }
  })
  if (!existingCard) throw new Error("card with this id not found");
  return existingCard
}
const createNewCard = async (parent: any, args: any, context: Context) => {
  const newCard = await context.prisma.card.create({
    data: {
      answer: args.answer,
      question: args.question
    }
  })
  return newCard
}

export { getAllCards, createNewCard, getOneCard }