"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOwnCards = exports.updateCard = exports.deleteCard = exports.getOneCard = exports.createNewCard = exports.getAllCards = void 0;
const getAllCards = async (parent, args, context) => {
    const allCards = await context.prisma.card.findMany();
    return allCards;
};
exports.getAllCards = getAllCards;
const getOneCard = async (parent, args, context) => {
    const existingCard = await context.prisma.card.findUnique({
        where: {
            id: args.id
        }
    });
    if (!existingCard)
        throw new Error("card with this id not found");
    return existingCard;
};
exports.getOneCard = getOneCard;
const createNewCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error("Access denied");
    const newCard = await context.prisma.card.create({
        data: {
            answer: args.answer,
            question: args.question,
            postedById: userId
        }
    });
    return newCard;
};
exports.createNewCard = createNewCard;
const deleteCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error("Access denied");
    const cardToBeDeleted = await context.prisma.card.findUnique({
        where: {
            id: args.id
        }
    });
    if (!cardToBeDeleted)
        throw new Error("card not found");
    if (cardToBeDeleted.postedById !== userId)
        throw new Error("you have no access on this card");
    await context.prisma.card.delete({
        where: { id: args.id }
    });
    return "card have been deleted";
};
exports.deleteCard = deleteCard;
const updateCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error("Access denied");
    const cardToBeUpdate = await context.prisma.card.findUnique({
        where: {
            id: args.id
        }
    });
    if (!cardToBeUpdate)
        throw new Error("card not found");
    if (cardToBeUpdate.postedById !== userId)
        throw new Error("you have no access on this card");
    const updatedCard = await context.prisma.card.update({
        where: {
            id: args.id,
        },
        data: {
            question: args.question,
            answer: args.answer
        }
    });
    return updatedCard;
};
exports.updateCard = updateCard;
const getOwnCards = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error("Access denied");
    const ownCards = await context.prisma.card.findMany({
        where: { postedById: userId }
    });
    return ownCards;
};
exports.getOwnCards = getOwnCards;
//# sourceMappingURL=Resolver.js.map