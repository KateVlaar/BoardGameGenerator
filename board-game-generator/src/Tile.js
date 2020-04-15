import React from 'react';
import './Tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

class Tile extends React.Component {

    constructor() {
        super();
        this.state = {editingText: false};
    }
    edit = () => {
        console.log('Editing Comment');
        this.setState({editingText: true});
    }

    save = () => {
        console.log('Saving Comment');
        this.setState({editingText: false});
    }

    renderTile = () => {
        return (
            <div className="Tile">
                <h1 className="label">{this.props.children}</h1>
                <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                <button className="tile-button"><FontAwesomeIcon icon={faFillDrip} size="2x" /></button>
            </div>
        );
    }

    renderEditText = () => {
        return (
            <div className="Tile">
                <textarea ref="newText" className="text-area" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="tile-button"><FontAwesomeIcon icon={faCheckCircle} size="2x" /></button>
            </div>
        );
    }

    render() {
        if (this.state.editingText) {
            return this.renderEditText();
        } else {
            return this.renderTile();
        }
    }
}

export default Tile;