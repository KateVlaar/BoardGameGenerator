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
        console.log("New default card select " + frontText + " " + backText)
		this.setState({frontText: frontText});
		this.setState({backText: backText});
	}

	onBackTextUpdate = (backText) => {
		console.log("New default card select")
		this.setState({backText: backText})
	}
	
	onItemDropped(droppedItem) {
        console.log("We been dropped " + droppedItem );
	}
	
	onColorUpdate = (color) => {
		this.setState({background: color})
	}

    render () {
        return (<div onClick={this.closeDropdownOnTouchOutside} style={{textAlign: "center"}}>
					<div className="dropdown-headers" >
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} onBackTextUpdate={this.backTextUpdate}  items={advancements} header="Advancement"  dropdownClass="dropdown-content-1" />
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} onBackTextUpdate={this.backTextUpdate}  items={drawBacks} header="Draw Backs" dropdownClass="dropdown-content-2"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} onBackTextUpdate={this.backTextUpdate}  items={punishments} header="Punishments" dropdownClass="dropdown-content-3"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect} onBackTextUpdate={this.backTextUpdate}  items={games} header="Games" dropdownClass="dropdown-content-4"/>
					</div>
					{/* <DefaultCard onDefaultCardSelect={this.newDefaultCardSelect} frontText={this.state.frontText} backText="Player must advance by three spaces" background="#b0e0e6" /> */}
				<Drag dataItem={{frontText: this.state.frontText, backText: this.state.backText, background: this.state.background}}>
					<Tile onDefaultCardSelect={this.newDefaultCardSelect} class="tile" onColorUpdate={this.onColorUpdate} frontText={this.state.frontText} backText={this.state.backText} background={this.state.background} />
				</Drag>
				{/* <DropTarget onItemDropped={this.onItemDropped}><Board className="board" draggable onDragOver={e => this.handleDragOver(e)}></Board></DropTarget> */}
			</div>);
    }
}

export default EditableTileWithDropdowns;