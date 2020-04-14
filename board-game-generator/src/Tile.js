import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  render() {
    return <div className="Tile">
                <h1 className="label">{this.props.text}</h1>
                <button className="color-button"></button>
                <button className="edit-button"></button>
            </div>;
    }
}

export default Tile;