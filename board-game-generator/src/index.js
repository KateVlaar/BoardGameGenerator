import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tile from './Tile.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Tile>Hi I am a car! I am also a tile with a lot of text</Tile>
  </React.StrictMode>,
  document.getElementById('tile')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
