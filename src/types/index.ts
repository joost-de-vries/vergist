
export interface StoreState {
    places: Place[];
    selected?: string;
}

export interface Place{
    name:string
}

export function placeName(place:Place) {
    // extract text from link
    return place.name.replace(/<(?:.|\n)*?>/g, '');
}