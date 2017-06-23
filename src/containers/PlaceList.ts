import {StoreState} from "../types/index";

import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';
import {select} from "../actions/index";
import {updateSelection} from "../openlayers";
import {PlaceList} from "../PlaceList";
import './popup.css'

export function mapStateToProps(state:StoreState)  {
    return {
        places: state.places,
        selected: state.selected
    };
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch:Dispatch<actions.Action>) {
    return {
        onSelectClick: function(e:MouseEvent) {
            const name = (e.target as any).textContent;
            dispatch(select(name));
            // Update map
            updateSelection(name);
        }
    };
}

export const PlaceListContainer = connect(mapStateToProps, mapDispatchToProps)(PlaceList)