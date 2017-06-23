
import * as React from 'react';
import {Place, placeName} from "./types/index";

export interface Props {
    places: Place[]
    selected: string
    onSelectClick: () => void
}
export class PlaceList extends React.Component<Props, object> {
    render() {

        const onSelectClick = this.props.onSelectClick;
        const selected = this.props.selected;
        const createItem = (place:Place) =>{
            const name = placeName(place);
            const selClass = (name == selected) ? 'selected' : '';
            return <li key={name} className={selClass} onClick={onSelectClick}>{name}</li>;
        };
        return (
            <ul>
                {this.props.places.map(createItem)}
            </ul>
        );
    }
}