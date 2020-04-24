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
            text: this.props.text,
            background: "#b0e0e6"};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleColorChange = this.handleColorChange.bind(this);
        // this.onClick = this.onClick.bind(this);
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
        // this.setState({text: this.textBox.current});
    }

    onClick = () => {
        // if (!this.state.editingText && !this.state.changingColor) {
            document.querySelector('.Tile').classList.toggle('is-flipped');
        //     console.log('flipped' + this.state.changingColor);
        // }
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

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    renderTile = () => {
        return (
                // <div className="scene" >
                //     <div className="Tile" style={{backgroundColor: this.state.background}} onClick={this.onClick}  >
                //         <div className="TileFront TileFace" draggable>
                //             <h1 className="label">{this.state.text}</h1>
                //             <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                //             <button onClick={this.colorChange} className="tile-button"><FontAwesomeIcon icon={faFillDrip} size="2x" /></button>
                //         </div>
                //         <div className="TileBack TileFace">
                //             <h1 className="label">Player must move their marker three places ahead</h1>
                //             <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                //         </div>
                //     </div>
                // </div>
            //     <div class="Tile" style={{backgroundColor: this.state.background}}onClick={this.onClick}>
            //         <div class="TileFace TileFront">
            //             Front
            //         </div>
            //         <div class="TileFace TileBack">
            //             Back
            //         </div>
            //   </div>
                <div className="Tile">
                    <div className="TileFront TileFace" style={{backgroundColor: this.state.background}} >
                        <h1 className="label" onClick={this.onClick}>{this.state.text}</h1>
                        <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                        <button onClick={this.colorChange} className="tile-button"><FontAwesomeIcon icon={faFillDrip} size="2x" /></button>
                    </div>
                    <div className="TileBack TileFace" style={{backgroundColor: this.state.background}} >
                        <h1 className="label" onClick={this.onClick}>Player must move their marker three places ahead</h1>
                        <button onClick={this.edit} className="tile-button"><FontAwesomeIcon icon={faPencilAlt} size="2x" /></button>
                    </div>
            </div>
        );
    }

    renderEditText = () => {
        return (
            <div className="Tile" style={{backgroundColor: this.state.background}}>
                <textarea maxLength="65" className="text-area" defaultValue={this.state.text} onChange={this.handleChange} style={{backgroundColor: this.state.background}}></textarea>
                <button onClick={this.save} className="tile-button"><FontAwesomeIcon icon={faCheckCircle} size="2x" /></button>
            </div>
        );
    }

    renderColorChange = () => {
        return (
            <div>
                <div className="Tile" style={{backgroundColor: this.state.background}}>
                    <h1 className="label">{this.state.text}</h1>
                    <button onClick={this.saveColorChange} className="tile-button"><FontAwesomeIcon icon={faCheckCircle} size="2x" /></button>
                </div>
                < ChromePicker color={this.state.background} onChange={this.handleColorChange} onChangeComplete={this.handleColorChangeComplete}/>
            </div>
        );
    }

    render() {
        if (this.state.editingText) {
            return this.renderEditText();
        } else if (this.state.changingColor) {
            return this.renderColorChange();
        } else {
            return this.renderTile();
        }
    }
}

export default Tile;