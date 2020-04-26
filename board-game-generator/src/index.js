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

const advancements = [
    {
      id: 0,
      frontText: "Move Ahead 3 Spaces"
    },
    {
      id: 1,
      frontText: "Move Ahead 4 spaces"
    }
];

const drawBacks = [
    {
      id: 0,
      frontText: "Move Back 3 Spaces"
    },
    {
      id: 1,
      frontText: "Move Back 4 spaces"
    }
];

const punishments =[
    {
      id: 0,
      frontText: "Skip a turn"
    },
    {
      id: 1,
      frontText: "Choose someone to skip a turn"
    }
];

const games = [
  {
    id: 0,
    frontText: "Duel a player to a game of rock paper scissors"
  },
  {
    id: 1,
    frontText: "Act out an animal"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <Dropdown items={advancements} header="Advancement"  dropdownClass="dropdown-content-1"></Dropdown>
    <Dropdown items={drawBacks} header="Draw Backs" dropdownClass="dropdown-content-2"></Dropdown>
    <Dropdown items={punishments} header="Punishments" dropdownClass="dropdown-content-3"></Dropdown>
    <Dropdown items={games} header="Games" dropdownClass="dropdown-content-4"></Dropdown>
  </React.StrictMode>,
  document.getElementById('dropdown-headers')
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
