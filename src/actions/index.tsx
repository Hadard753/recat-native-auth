export const selectCard = ( cardId: number ) => {
    return {
        type: 'select_card',
        payload: cardId
    };
};