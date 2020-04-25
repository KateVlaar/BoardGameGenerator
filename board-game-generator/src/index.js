import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tile from './Tile.js';
import Dropdown from './Dropdown.js';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const items = [
    {
      id: 0,
      frontText: "Move Ahead 3 Spaces"
    },
    {
      id: 1,
      frontText: "Move Ahead 4 spaces"
    }
  ];

ReactDOM.render(
  <React.StrictMode>
    <Dropdown items={items}></Dropdown>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Tile frontText="Move ahead 3 spaces" backText="Player must advance by three spaces" background="#b0e0e6"></Tile>
  </React.StrictMode>,
  document.getElementById('tile')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
