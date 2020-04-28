import React from 'react';
import './Board.css';
import Tile from './Tile.js';

const BOARD_SIZE = 23;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.arr = ["help", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    }

    createBoard = (text, index) => {
        if ((index >= 6 && index <= 10) || (index >= 19 && index <= 23)) {
            return(<div></div>);

        } else {
            return(<div className="boardTile"><Tile frontText={text} hideButtons={true} backText="Player must advance by three spaces" background="#E6E6E6"></Tile></div>);
        }
    }

    render() {
        return (
            <div className="board">
                {this.arr.map(this.createBoard)}
            </div>);
    }
}
export default Board;