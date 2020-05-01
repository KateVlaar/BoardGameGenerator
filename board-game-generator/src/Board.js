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
        //this.setTileCoordinates();
    }

    setTileCoordinates() {
        var xStart = (window.innerWidth - ((250*BOARD_WIDTH) + (5*(BOARD_WIDTH-1)))) / 2;
        console.log(xStart);
        var y = 500;
        var x = xStart;
        for (let i = 1; i <= this.state.arr.length; i++) {
            var item = this.state.arr[i-1];
            console.log(i);
            // if (((i-1) % BOARD_WIDTH) === 0 && i !== 1) {
            //     console.log("1 " + i);
            //     x = xStart;
            //     y += 255;
            // }
            if (i % BOARD_WIDTH != 0) {
                item.x = x;
                item.y = y;
                x += 255;
            }
            if (i === 7 || i === 21) {
                item.x = x - 255;
                x = xStart;
                y += 255;
                item.y = y;
                y += 255;
            }

            if (i === 14 || i == 28) {
                item.x = xStart;
                y += 255;
                item.y = y;
            }
            // if (i % BOARD_WIDTH === 0) {
            //     console.log("2 " + i);
            //     x = xStart;
            //     y += 255;
            // }
        }
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
            return(<div key={index} style={{position: "absolute", left: item.x, top: item.y}} className={index}><Tile frontText={item.frontText} hideButtons={true} backText="Player must advance by three spaces" background={item.background}></Tile></div>);
    }

    onItemDropped(droppedItem, x, y) {
        var a = this.state.arr;
        var index = this.getTileIndexFromPosition(x, y);
        console.log(index);
        var obj = JSON.parse(droppedItem);
        a[index].frontText = obj.frontText;
        a[index].background = obj.background;
        this.setState({arr: a});
    }

    render() {
        return (
            // <DropTarget onItemDropped={this.onItemDropped}><Board className="board" draggable onDragOver={e => this.handleDragOver(e)}></Board></DropTarget>
            <DropTarget className="board" onItemDropped={this.onItemDropped} style={{textAlign: "center"}}>
                {console.log(this.state.arr[1])}
                {this.state.arr.map(this.createBoard)}
            </DropTarget>);
    }
}
export default Board;