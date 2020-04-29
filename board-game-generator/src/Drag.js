import React from 'react';

class Drag extends React.Component {
    constructor(props) {
        super(props);
    }

    startDrag(ev) {
        console.log("1" + ev.target.id);
        ev.dataTransfer.setData("text", this.props.dataItem);
      }

    render() {
        return (
            <div draggable onDragStart={e => this.startDrag(e)}>
                {this.props.children}
            </div>
        );
    }

}
export default Drag;