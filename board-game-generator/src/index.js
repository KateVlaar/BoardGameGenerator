import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import EditableTileWithDropdowns from './EditableTileWithDropdowns';
import Board from './Board';

// KNOWN BUGS:
// 1. Dragging on instruction face mirrors tile
// 2. Board is not dynamically resizeable
// 3. Tile positions are not programatically determined
// MISSING FEATURES:
// 1. Click to dismiss dropdown
// 2. Refresh saves state

ReactDOM.render(
  <React.StrictMode>
    <EditableTileWithDropdowns></EditableTileWithDropdowns>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Board></Board>
  </React.StrictMode>,
  document.getElementById('board')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
