import { CardActions } from '../models/Actions.model';

export default (state = null, action: {type: CardActions, payload?: any}) => {
  switch(action.type) {
      case CardActions.SELECT_CARD: 
        return action.payload; 
      default: 
        return state;
  }  
};