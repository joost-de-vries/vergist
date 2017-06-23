import {Place} from "../types/index";

export interface VisiblePlaces {
    type: 'VISIBLE_PLACES';
    places: Place[];
}

export interface Select {
    type: 'SELECT';
    placeName:string;
}

export type Action = VisiblePlaces | Select;

export function visiblePlaces(places:Place[]): VisiblePlaces {
    return {
        type: 'VISIBLE_PLACES',
        places: places
    }
}

export function select(placeName:string): Select {
    return {
        type: 'SELECT',
        placeName: placeName
    }
}