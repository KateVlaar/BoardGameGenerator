import React from 'react';
import Tile from './Tile.js';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

function DefaultCard(props) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.TILE },
        collect: monitor => ({
        isDragging: !!monitor.isDragging(),
        }),
    })

    return(<div ref={drag}>
        {console.log("TEXT: " + props.frontText)}
                <Tile onDefaultCardSelect={props.onDefaultCardSelect} frontText={props.frontText} backText="Player must advance by three spaces" background="#b0e0e6"></Tile>
            </div>);
}

export default DefaultCard;