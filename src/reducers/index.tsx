import { combineReducers } from 'redux';
import CardsReducer from './CardsReducer';
import CardSelectionReducer from './CardSelectionReducer';

export default combineReducers({
    cards: CardsReducer,
    selectedCard: CardSelectionReducer
});