// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
import React from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    openDropdown = () => {
        // close dropdown on click outside
        // let dropdowns = document.getElementsByClassName("dropdown-content");
        // for (let i = 0; i < dropdowns.length; i++) {
        //   let openDropdown = dropdowns[i];
        //   openDropdown.classList.toggle('is-flipped');
        // }
        console.log('open dialog');
        document.querySelector('.dropdown-content').classList.toggle("show");
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.openDropdown} className="dropdown-button"><span>{this.props.header}</span><FontAwesomeIcon className="dropdown-icon" icon={faSortDown} size="2x" /></button>
                <div className="dropdown-content">
                    {this.props.items.map((item) => {
                        return (<a key={item.id}>{item.frontText}</a>);
                    })}
                </div>
            </div>
        );
    }
}

export default Dropdown;