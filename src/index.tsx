import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { createStore } from 'redux';
import {StoreState} from "./types/index";
import {placeSelector} from "./reducers/index"
import { Provider } from 'react-redux';
import { PlaceListContainer} from './containers/PlaceList'

console.log("index.tsx")

export const store = createStore<StoreState>(placeSelector, {
   places: []
});

ReactDOM.render(
    <Provider store={store}>
        <PlaceListContainer />
    </Provider>,
    document.getElementById('root') as HTMLElement
);