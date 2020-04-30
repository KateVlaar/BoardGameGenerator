import React from 'react';
import './Board.css';
import Tile from './Tile.js';
import DropTarget from './DropTarget'

const BOARD_SIZE = 23;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    index: 0,
                    frontText: "help",
                    backText: "",
                    background: "#E6E6E6",
                    x: 100,
                    y: 500
                },
                {
                    index: 1,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: 355,
                    y: 500
                },
                {
                    index: 2,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: 610,
                    y: 500
                },
                {
                    index: 3,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: 865,
                    y: 500
                },
                {
                    index: 4,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: 1120,
                    y: 500
                },
                {
                    index: 6,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: 1375,
                    y: 500
                }
            ]
        };
        this.onItemDropped = this.onItemDropped.bind(this);
    }

    getTileIndexFromPosition(x, y) {
        for (let i = 0; i < this.state.arr.length; i++) {
            let item = this.state.arr[i];
            if (x <= item.x + 250 && y <= item.y + 250) {
                return i;
            }
        }
    }

    createBoard = (item, index) => {
        if ((index >= 6 && index <= 10) || (index >= 19 && index <= 23)) {
            return(<div></div>);

        } else {
            return(<div key={index} style={{position: "absolute", left: item.x, top: item.y}} className={index}><Tile frontText={item.frontText} hideButtons={true} backText="Player must advance by three spaces" background={item.background}></Tile></div>);
        }
    }

    onItemDropped(droppedItem, x, y) {
        console.log("We been dropped " + droppedItem + x + " " + y);
        // console.log(this.arr[0]);
        //this.state.arr[0] = droppedItem;
        console.log(this.state.arr);
        var a = this.state.arr;
        
        var index = this.getTileIndexFromPosition(x, y);
        console.log(index);
        var obj = JSON.parse(droppedItem);
        a[index].frontText = obj.frontText;
        console.log(obj.background);
        a[index].background = obj.background;
        this.setState({arr: a});
    }

    render() {
        return (
            // <DropTarget onItemDropped={this.onItemDropped}><Board className="board" draggable onDragOver={e => this.handleDragOver(e)}></Board></DropTarget>
            <DropTarget className="board" onItemDropped={this.onItemDropped}>
                {console.log(this.state.arr[1])}
                {this.state.arr.map(this.createBoard)}
            </DropTarget>);
    }
}
export default Board;