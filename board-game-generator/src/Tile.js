import React from 'react';
import './Tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editingText: false, text: this.props.text};
        this.handleChange = this.handleChange.bind(this);
    }
    edit = () => {
        console.log('Editing Comment');
        this.setState({editingText: true});
    }

    save = () => {
        console.log('Saving Comment');
        this.setState({editingText: false});
        // this.setState({text: this.textBox.current});
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    renderTile = () => {
        return (
            <div className="Tile">
                <h1 className="label">{this.state.text}</h1>
                <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                <button className="tile-button"><FontAwesomeIcon icon={faFillDrip} size="2x" /></button>
            </div>
        );
    }

    renderEditText = () => {
        return (
            <div className="Tile">
                <textarea maxLength="65" className="text-area" defaultValue={this.state.text} onChange={this.handleChange}></textarea>
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