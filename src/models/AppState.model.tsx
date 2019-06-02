import { CardModel } from "./Card.model";
import { AuthState } from './AuthState.model';

export interface AppState {
    cards: CardModel[],
    selectedCardId: number,
    authState: AuthState
}