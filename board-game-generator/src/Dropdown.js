// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
import React from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: "hello"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
		window.addEventListener("click", this.props.onClick);
    }
    
	componentWillUnmount() {
		window.removeEventListener("click", this.props.onClick);
	}

    openDropdown = () => {
        document.querySelector('.' + this.props.dropdownClass).classList.toggle("show");
    }

    handleChange = (event) => {
        this.props.onDefaultCardSelect(event);
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.openDropdown} className="dropdown-button"><span>{this.props.header}</span><FontAwesomeIcon className="dropdown-icon" icon={faSortDown} size="2x" /></button>
                <div className={this.props.dropdownClass + " dropdown-content"}>
                    {this.props.items.map((item, index) => {
                        return (<div key={index}>
                                    <button onClick={() => this.handleChange(item.frontText)} >{item.frontText}</button>
                                </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default Dropdown;