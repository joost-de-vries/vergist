import {observer} from 'mobx-react';

import * as React from 'react';
import {Place, placeName, AppState} from "./appstate";
import {updateSelection} from "./openlayers";
import './popup.css'

@observer
export class PlaceList extends React.Component<{appState: AppState}, object> {
    render() {
        const createItem = (place:Place) =>{
            const name = placeName(place);
            const selClass = (name == this.props.appState.selected) ? 'selected' : '';
            return <li key={name} className={selClass} onClick={this.onSelectClick}>{name}</li>;
        };
        return (
            <ul>
                {this.props.appState.places.map(createItem)}
            </ul>
        );
    }

    onSelectClick = (e:React.MouseEvent<HTMLLIElement>) => {
            const name = e.currentTarget.textContent!;
            this.props.appState.select(name);
            // Update map
            updateSelection(name);
    }
}