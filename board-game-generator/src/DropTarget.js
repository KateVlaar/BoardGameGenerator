import React from 'react';

class DropTarget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {targetClass: ""};
    }

    dragOver(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.setState({targetClass: ev.target.className});
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