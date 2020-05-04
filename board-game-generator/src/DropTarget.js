import React from 'react';

class DropTarget extends React.Component {

    dragOver(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    drop(ev) {
        ev.preventDefault();
        const droppedItem = ev.dataTransfer.getData("text");
        if (droppedItem) {
            this.props.onItemDropped(droppedItem, ev.pageX, ev.pageY);
        }
    }
    
    render() {
        return (
            <div onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e)}>
                {this.props.children}
            </div>);
    }
}

export default DropTarget;