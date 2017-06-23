import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppState} from "./appstate";
import {PlaceList} from "./PlaceList";

export const appState = new AppState();

ReactDOM.render(<PlaceList appState={appState} />, document.getElementById('root'));
