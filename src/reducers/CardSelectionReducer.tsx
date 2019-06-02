import { CardActionsTypes } from '../models/Actions.model';

export default (state = null, action: {type: CardActionsTypes, payload?: any}) => {
  switch(action.type) {
      case CardActionsTypes.SELECT_CARD: 
        return action.payload; 
      default: 
        return state;
  }  
};