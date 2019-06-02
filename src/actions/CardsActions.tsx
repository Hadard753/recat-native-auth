import { CardActionsTypes } from '../models/Actions.model';

export const selectCard = (cardId: number) => {
  return {
    type: CardActionsTypes.SELECT_CARD,
    payload: cardId
  };
};
