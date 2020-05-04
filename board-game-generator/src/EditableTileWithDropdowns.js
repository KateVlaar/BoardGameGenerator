import React from 'react';
import Tile from './Tile.js';
import Dropdown from './Dropdown.js';
import Drag from './Drag';

const advancements = [
    {
      id: 0,
	  frontText: "Move Ahead 3 Spaces",
	  backText: "Player must advance their position by 3 places"
    },
    {
      id: 1,
	  frontText: "Move Ahead 4 spaces",
	  backText: "Player must advance their position by 4 places"
    }
];

const drawBacks = [
    {
      id: 0,
	  frontText: "Move Back 3 Spaces",
	  backText: "Player must move their position back 3 places"
    },
    {
      id: 1,
	  frontText: "Move Back 4 spaces",
	  backText: "Player must move their position back 4 places"
    }
];

const punishments =[
    {
      id: 0,
	  frontText: "Skip a turn",
	  backText: "Player will not play their turn next round"
    },
    {
      id: 1,
	  frontText: "Choose someone to skip a turn",
	  backText: "Choose someone to not play in the next round"
    }
];

const games = [
  {
    id: 0,
	frontText: "Duel a player to a game of rock paper scissors",
	backText: "Loser of the duel must skip their next turn"
  },
  {
    id: 1,
	frontText: "Act out an animal",
	backText: "Players have 1 minute to guess the animal, move back 3 places otherwise"
  }
];

class EditableTileWithDropdowns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontText: "Move Ahead 3 Spaces",
			backText: "Player must advance their position by 3 places",
			background: "#b0e0e6"
        }
    }

    newDefaultCardSelect = (frontText, backText) => {
		this.setState({frontText: frontText});
		this.setState({backText: backText});
	}
	
	onColorUpdate = (color) => {
		this.setState({background: color})
	}

    render () {
        return (<div onClick={this.closeDropdownOnTouchOutside} style={{textAlign: "center"}}>
					<div className="dropdown-headers" >
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} items={advancements} header="Advancement"  dropdownClass="dropdown-content-1" />
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} items={drawBacks} header="Draw Backs" dropdownClass="dropdown-content-2"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} items={punishments} header="Punishments" dropdownClass="dropdown-content-3"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} items={games} header="Games" dropdownClass="dropdown-content-4"/>
					</div>
				<Drag dataItem={{frontText: this.state.frontText, backText: this.state.backText, background: this.state.background}}>
					<Tile onDefaultCardSelect={this.newDefaultCardSelect} class="tile" onColorUpdate={this.onColorUpdate} frontText={this.state.frontText} backText={this.state.backText} background={this.state.background} />
				</Drag>
			</div>);
    }
}

export default EditableTileWithDropdowns;