

import {StoreState} from "../types/index";
import {Action} from "../actions/index";
import {SELECT, VISIBLE_PLACES} from '../constants/index';

export function placeSelector(state:StoreState, action:Action):StoreState {
    switch(action.type){
        case VISIBLE_PLACES:
            return {places: action.places, selected: state.selected};
        case SELECT:
            return {places: state.places, selected: action.placeName};
        default:
            return state;
    }
}