import React from 'react';

class Drag extends React.Component {

    startDrag(ev) {
        var stringify = JSON.stringify(this.props.dataItem);
        ev.dataTransfer.setData("text", stringify);
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