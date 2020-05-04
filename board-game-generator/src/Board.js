import React from 'react';
import './Board.css';
import Tile from './Tile.js';
import DropTarget from './DropTarget'

const BOARD_WIDTH = 6;
const BOARD_SIZE = 23;
const xStart = (window.innerWidth - ((250*BOARD_WIDTH) + (5*(BOARD_WIDTH-1)))) / 2

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
                    x: xStart,
                    y: 500
                },
                {
                    index: 1,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255,
                    y: 500
                },
                {
                    index: 2,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*2,
                    y: 500
                },
                {
                    index: 3,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*3,
                    y: 500
                },
                {
                    index: 4,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*4,
                    y: 500
                },
                {
                    index: 5,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*5,
                    y: 500
                },
                {
                    index: 6,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*5,
                    y: 755
                },
                {
                    index: 7,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*5,
                    y: 1010
                },
                {
                    index: 8,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*4,
                    y: 1010
                },
                {
                    index: 9,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*3,
                    y: 1010
                },
                {
                    index: 10,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*2,
                    y: 1010
                },
                {
                    index: 11,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*1,
                    y: 1010
                },
                {
                    index: 12,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart,
                    y: 1010
                },
                {
                    index: 13,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart,
                    y: 1265
                },
                {
                    index: 14,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart,
                    y: 1520
                },
                {
                    index: 15,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255,
                    y: 1520
                },
                {
                    index: 16,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*2,
                    y: 1520
                },
                {
                    index: 17,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*3,
                    y: 1520
                },
                {
                    index: 18,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*4,
                    y: 1520
                },
                {
                    index: 19,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + 255*5,
                    y: 1520
                }
            ]
        };
        this.onItemDropped = this.onItemDropped.bind(this);
    }

    getTileIndexFromPosition(x, y) {
        for (let i = 0; i < this.state.arr.length; i++) {
            let item = this.state.arr[i];
            if ((x >= item.x && x <= item.x + 250) && (y >= item.y && y <= item.y + 250)) {
                return i;
            }
        }
    }

    createBoard = (item, index) => {
        return(<div key={index} style={{position: "absolute", left: item.x, top: item.y}} className={index}><Tile class={"tile"+index} frontText={item.frontText} backText={item.backText} hideButtons={true} background={item.background}></Tile></div>);
    }

    onItemDropped(droppedItem, x, y) {
        var a = this.state.arr;
        var index = this.getTileIndexFromPosition(x, y);
        console.log(index);
        var obj = JSON.parse(droppedItem);
        a[index].frontText = obj.frontText;
        a[index].backText = obj.backText;
        a[index].background = obj.background;
        this.setState({arr: a});
    }

    render() {
        return (
            <DropTarget className="board" onItemDropped={this.onItemDropped} style={{textAlign: "center"}}>
                {console.log(this.state.arr[1])}
                {this.state.arr.map(this.createBoard)}
            </DropTarget>);
    }
}
export default Board;