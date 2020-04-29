import React from 'react';

class DropTarget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {targetClass: ""};
    }

    dragOver(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log(ev.target.className);
        this.setState({targetClass: ev.target.className});
    }
    
    drop(ev) {
        ev.preventDefault();
        console.log("2" + ev.target.id);
        const droppedItem = ev.dataTransfer.getData("text");
        console.log("HERE: " + droppedItem);
        if (droppedItem) {
            this.props.onItemDropped(droppedItem, this.state.targetClass);
        }
        // dropevent.target.appendChild(document.getElementById(data));
    }
    
    render() {
        return (
            <div onDragOver={e => this.dragOver(e)} onDrop={e => this.drop(e)}>
                {this.props.children}
            </div>);
    }
}

export default DropTarget;