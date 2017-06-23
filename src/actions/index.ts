import * as constants from '../constants'
import {Place} from "../types/index";

export interface VisiblePlaces {
    type: constants.VISIBLE_PLACES;
    places: Place[];
}

export interface Select {
    type: constants.SELECT;
    placeName:string;
}

export type Action = VisiblePlaces | Select;

export function visiblePlaces(places:Place[]): VisiblePlaces {
    return {
        type: constants.VISIBLE_PLACES,
        places: places
    }
}

export function select(placeName:string): Select {
    return {
        type: constants.SELECT,
        placeName: placeName
    }
}