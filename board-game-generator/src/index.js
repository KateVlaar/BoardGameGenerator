import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EditableTileWithDropdowns from './EditableTileWithDropdowns';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Dropdown items={advancements} header="Advancement"  dropdownClass="dropdown-content-1"></Dropdown>
//     <Dropdown items={drawBacks} header="Draw Backs" dropdownClass="dropdown-content-2"></Dropdown>
//     <Dropdown items={punishments} header="Punishments" dropdownClass="dropdown-content-3"></Dropdown>
//     <Dropdown items={games} header="Games" dropdownClass="dropdown-content-4"></Dropdown>
//   </React.StrictMode>,
//   document.getElementById('dropdown-headers')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Tile frontText="Move ahead 3 spaces" backText="Player must advance by three spaces" background="#b0e0e6"></Tile>
//   </React.StrictMode>,
//   document.getElementById('tile')
// );

ReactDOM.render(
  <React.StrictMode>
    <EditableTileWithDropdowns></EditableTileWithDropdowns>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
