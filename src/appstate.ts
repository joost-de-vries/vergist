import {observable} from 'mobx';

export class AppState {
    @observable public places: Place[] = []
    @observable public selected?: string

    constructor() {}

    select(name:string){
        this.selected=name;
    }
}

export interface Place{
    name:string
}

export function placeName(place:Place) {
    // extract text from link
    return place.name.replace(/<(?:.|\n)*?>/g, '');
}