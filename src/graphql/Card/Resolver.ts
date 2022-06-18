import { Context, context } from '../../context';
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

const deleteCard = async (parent: any, args: any, context: Context) => {
  const cardToBeDeleted = await context.prisma.card.delete({
    where: {
      id: args.id,
    }
  })
  if (!cardToBeDeleted) throw new Error("Card with that id is not found");
  return "card have been deleted"
}

const updateCard = async (parent: any, args: any, context: Context) => {
  const cardToBeUpdated = await context.prisma.card.update({
    where: {
      id: args.id,
    },
    data: {
      question: args.question,
      answer: args.answer
    }
  })
  if (!cardToBeUpdated) throw new Error("card with that id not found");
  return cardToBeUpdated

}
const postedByUser = async (parent: any, args: any, context: Context) => {
  const cardfForUser = await context.prisma.user.findUnique({
    where: { id: parent.id }
  })
  return cardfForUser
}

export { getAllCards, createNewCard, getOneCard, deleteCard, updateCard, postedByUser }