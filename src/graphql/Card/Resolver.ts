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
  const userId = context.userId;
  if (!userId) throw new Error("Access denied");
  const newCard = await context.prisma.card.create({
    data: {
      answer: args.answer,
      question: args.question,
      postedById: userId
    }
  })
  return newCard
}

const deleteCard = async (parent: any, args: any, context: Context) => {
  const userId = context.userId;
  if (!userId) throw new Error("Access denied");
  const cardToBeDeleted = await context.prisma.card.findUnique({
    where: {
      id: args.id
    }
  })
  if (!cardToBeDeleted) throw new Error("card not found");
  if (cardToBeDeleted.postedById !== userId) throw new Error("you have no access on this card");
  await context.prisma.card.delete({
    where: { id: args.id }
  })
  return "card have been deleted"
}

const updateCard = async (parent: any, args: any, context: Context) => {
  const userId = context.userId;
  if (!userId) throw new Error("Access denied");

  const cardToBeUpdate = await context.prisma.card.findUnique({
    where: {
      id: args.id
    }
  })
  if (!cardToBeUpdate) throw new Error("card not found");
  if (cardToBeUpdate.postedById !== userId) throw new Error("you have no access on this card");

  const updatedCard = await context.prisma.card.update({
    where: {
      id: args.id,
    },
    data: {
      question: args.question,
      answer: args.answer
    }
  })
  return updatedCard

}
const getOwnCards = async (parent: any, args: any, context: Context) => {
  const userId = context.userId;
  if (!userId) throw new Error("Access denied");
  const ownCards = await context.prisma.card.findMany({
    where: { postedById: userId }
  })
  return ownCards
}

export { getAllCards, createNewCard, getOneCard, deleteCard, updateCard, getOwnCards }