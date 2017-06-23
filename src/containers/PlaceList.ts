import {StoreState} from "../types/index";

import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';
import {select} from "../actions/index";
import {updateSelection} from "../openlayers";
import {PlaceList} from "../PlaceList";

export function mapStateToProps(state:StoreState)  {
    return {
        places: state.places,
        selected: state.selected
    };
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch:Dispatch<actions.Action>) {
    return {
        onSelectClick: function(e:any) {
            const name = e.dispatchMarker.split('$')[1];
            dispatch(select(name));
            // Update map
            updateSelection(name);
        }
    };
}

export const PlaceListContainer = connect(mapStateToProps, mapDispatchToProps)(PlaceList)