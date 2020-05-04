import React from 'react';
import Tile from './Tile.js';
import DropTarget from './DropTarget'

const BOARD_WIDTH = 6;
const TILE_WIDTH = 255;
const xStart = (window.innerWidth - (((TILE_WIDTH-5)*BOARD_WIDTH) + (5*(BOARD_WIDTH-1)))) / 2;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardTiles: [
                {
                    index: 0,
                    frontText: "",
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
                    x: xStart + TILE_WIDTH,
                    y: 500
                },
                {
                    index: 2,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*2,
                    y: 500
                },
                {
                    index: 3,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*3,
                    y: 500
                },
                {
                    index: 4,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*4,
                    y: 500
                },
                {
                    index: 5,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*5,
                    y: 500
                },
                {
                    index: 6,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*5,
                    y: 755
                },
                {
                    index: 7,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*5,
                    y: 1010
                },
                {
                    index: 8,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*4,
                    y: 1010
                },
                {
                    index: 9,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*3,
                    y: 1010
                },
                {
                    index: 10,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*2,
                    y: 1010
                },
                {
                    index: 11,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH,
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
                    x: xStart + TILE_WIDTH,
                    y: 1520
                },
                {
                    index: 16,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*2,
                    y: 1520
                },
                {
                    index: 17,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*3,
                    y: 1520
                },
                {
                    index: 18,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*4,
                    y: 1520
                },
                {
                    index: 19,
                    frontText: "",
                    backText: "",
                    background: "#E6E6E6",
                    x: xStart + TILE_WIDTH*5,
                    y: 1520
                }
            ]
        };
        this.onItemDropped = this.onItemDropped.bind(this);
    }

    getTileIndexFromPosition(x, y) {
        for (let i = 0; i < this.state.boardTiles.length; i++) {
            let item = this.state.boardTiles[i];
            if ((x >= item.x && x <= item.x + TILE_WIDTH) && (y >= item.y && y <= item.y + TILE_WIDTH)) {
                return i;
            }
        }
    }

    createBoard = (item, index) => {
        return(<div key={index} style={{position: "absolute", left: item.x, top: item.y}} className={index}><Tile class={"tile"+index} frontText={item.frontText} backText={item.backText} hideButtons={true} background={item.background}></Tile></div>);
    }

    onItemDropped(droppedItem, x, y) {
        var boardItems = this.state.boardTiles;
        var index = this.getTileIndexFromPosition(x, y);
        var droppedItemData = JSON.parse(droppedItem);
        boardItems[index].frontText = droppedItemData.frontText;
        boardItems[index].backText = droppedItemData.backText;
        boardItems[index].background = droppedItemData.background;
        this.setState({boardTiles: boardItems});
    }

    render() {
        return (
            <DropTarget className="board" onItemDropped={this.onItemDropped} style={{textAlign: "center"}}>
                {this.state.boardTiles.map(this.createBoard)}
            </DropTarget>);
    }
}
export default Board;