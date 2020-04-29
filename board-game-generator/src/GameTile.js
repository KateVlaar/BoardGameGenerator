import React from 'react';
import Tile from './Tile.js';

export default function GameTile(arr) {
    const [, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
    })

    return (
        <div ref={drop}>
            {arr.map(this.createBoard)}
        </div>
    );
}