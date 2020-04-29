import React from 'react';
import './Board.css';
import Tile from './Tile.js';
import DropTarget from './DropTarget'

const BOARD_SIZE = 23;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {arr: ["help", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]};
        this.onItemDropped = this.onItemDropped.bind(this);
    }

    createBoard = (text, index) => {
        if ((index >= 6 && index <= 10) || (index >= 19 && index <= 23)) {
            return(<div></div>);

        } else {
            return(<div key={index} id={index} className={index}><Tile frontText={text} hideButtons={true} backText="Player must advance by three spaces" background="#E6E6E6"></Tile></div>);
        }
    }

    onItemDropped(droppedItem, targetClass) {
        console.log("We been dropped " + droppedItem  + targetClass);
        // console.log(this.arr[0]);
        //this.state.arr[0] = droppedItem;
        console.log(this.state.arr);
        var a = this.state.arr;
        a[0] = droppedItem;
        this.setState({arr: a});
    }

    render() {
        return (
            // <DropTarget onItemDropped={this.onItemDropped}><Board className="board" draggable onDragOver={e => this.handleDragOver(e)}></Board></DropTarget>
            <DropTarget className="board" onItemDropped={this.onItemDropped}>
                {console.log(this.state.arr[0])}
                {this.state.arr.map(this.createBoard)}
            </DropTarget>);
    }
}
export default Board;