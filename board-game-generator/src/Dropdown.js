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
        this.items = this.props.items;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
		window.addEventListener("click", this.props.onClick);
    }
    
	componentWillUnmount() {
		window.removeEventListener("click", this.props.onClick);
	}

    openDropdown = () => {
        // close dropdown on click outside
        // let dropdowns = document.getElementsByClassName("dropdown-content");
        // for (let i = 0; i < dropdowns.length; i++) {
        //   let openDropdown = dropdowns[i];
        //   openDropdown.classList.toggle('is-flipped');
        // }
        console.log('open dialog' + this.props.dropdownClass);
        document.querySelector('.' + this.props.dropdownClass).classList.toggle("show");
    }

    handleChange = (event) => {
        console.log("Event")
        //this.props.OnDefaultCardSelect(this.state.selectedItem);
        console.log(event);
        this.props.onDefaultCardSelect(event);
    }

    setSelectedItem = (text) => {
        console.log(text);
        //this.props.OnDefaultCardSelect(text);
        this.setState({selectedItem: text});
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.openDropdown} className="dropdown-button"><span>{this.props.header}</span><FontAwesomeIcon className="dropdown-icon" icon={faSortDown} size="2x" /></button>
                <div className={this.props.dropdownClass + " dropdown-content"}>
                    {console.log()}
                    {this.items.map(({id, frontText}, key) => {
                        return (<div key={key}>
                                    <button onClick={() => this.handleChange(frontText)} ref={ref => (this.items[key]) = ref}>{frontText}</button>
                                </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default Dropdown;