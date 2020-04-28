import React from 'react';
import './Tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { ChromePicker } from 'react-color';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editingText: false,
            changingColor: false,
            backText: this.props.backText,
            background: this.props.background};
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    edit = () => {
        console.log('Editing Comment');
        this.setState({editingText: true});
    }

    colorChange = () => {
        this.setState({ changingColor: true });
        console.log(this.state.changingColor);
    }

    save = () => {
        console.log('Saving Comment');
        this.setState({editingText: false});
    }

    onClick = () => {
        document.querySelector('.Tile').classList.toggle('is-flipped');
    }

    handleColorChange= (color, event)  => {
        this.setState({ background: color.hex});
    }

    handleColorChangeComplete = (color) => {
        this.setState({ background: color.hex});
    };

    saveColorChange = () => {
        this.setState({ changingColor: false});
        console.log("updating background")
    }

    handleTextAreaChange = (event) => {
        if (document.querySelector('.Tile').classList.contains('is-flipped')) {
            this.setState({backText: event.target.value});
        } else {
            this.props.onDefaultCardSelect(event.target.value);
            //this.setState({frontText: event.target.value});
        }
    }

    renderTileNoButtons = () => {
        return(
            <div className="Tile">
                <div className="TileFront TileFace" style={{backgroundColor: this.state.background}} >
                    <h1 className="label" onClick={this.onClick}>{this.props.frontText}</h1>
                </div>
                <div className="TileBack TileFace" style={{backgroundColor: this.state.background}} >
                    <h1 className="label" onClick={this.onClick}>{this.state.backText}</h1>
                </div>
            </div>);
    }

    renderTile = () => {
        return (
            <div className="Tile">
                <div className="TileFront TileFace" style={{backgroundColor: this.state.background}} >
                    <h1 className="label" onClick={this.onClick}>{this.props.frontText}</h1>
                    <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                    <button onClick={this.colorChange} className="tile-button"><FontAwesomeIcon icon={faFillDrip} size="2x" /></button>
                </div>
                <div className="TileBack TileFace" style={{backgroundColor: this.state.background}} >
                    <h1 className="label" onClick={this.onClick}>{this.state.backText}</h1>
                    <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                </div>
            </div>
        );
    }

    renderEditText = (text, classes) => {
        return (
            <div className="Tile">
                <div className={classes} style={{backgroundColor: this.state.background}}>
                    <textarea maxLength="65" className="text-area" defaultValue={text} onChange={this.handleTextAreaChange} style={{backgroundColor: this.state.background}}></textarea>
                    <button onClick={this.save} className="tile-button"><FontAwesomeIcon icon={faCheckCircle} size="2x" /></button>
                </div>
            </div>
        );
    }

    renderColorChange = () => {
        return (
            <div className="colorContainer">
                <div className="Tile" style={{backgroundColor: this.state.background}}>
                    <h1 className="label">{this.props.frontText}</h1>
                    <button onClick={this.saveColorChange} className="tile-button"><FontAwesomeIcon icon={faCheckCircle} size="2x" /></button>
                </div>
                < ChromePicker color={this.state.background} onChange={this.handleColorChange} onChangeComplete={this.handleColorChangeComplete}/>
            </div>
        );
    }

    render() {
        if (!(this.props.hideButtons)) {
            if (this.state.editingText) {
                if (document.querySelector('.Tile').classList.contains('is-flipped')) {
                    return this.renderEditText(this.state.backText, "TileFace TileBack");
                } else {
                    return this.renderEditText(this.props.frontText, "TileFace TileFront");
                }
            } else if (this.state.changingColor) {
                return this.renderColorChange();
            } else {
                return this.renderTile();
            }
        }
        else {
            return this.renderTileNoButtons();
        }
    }
}

export default Tile;