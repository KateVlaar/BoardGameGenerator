import React from 'react';
import Tile from './Tile.js';
import Dropdown from './Dropdown.js';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import DefaultCard from './DefaultCard.js'

const advancements = [
    {
      id: 0,
      frontText: "Move Ahead 3 Spaces"
    },
    {
      id: 1,
      frontText: "Move Ahead 4 spaces"
    }
];

const drawBacks = [
    {
      id: 0,
      frontText: "Move Back 3 Spaces"
    },
    {
      id: 1,
      frontText: "Move Back 4 spaces"
    }
];

const punishments =[
    {
      id: 0,
      frontText: "Skip a turn"
    },
    {
      id: 1,
      frontText: "Choose someone to skip a turn"
    }
];

const games = [
  {
    id: 0,
    frontText: "Duel a player to a game of rock paper scissors"
  },
  {
    id: 1,
    frontText: "Act out an animal"
  }
];

class EditableTileWithDropdowns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontText: "Move Ahead 3 Spaces",
            backText: ""
        }
    }

    newDefaultCardSelect = (frontText) => {
        console.log("New default card select")
        this.setState({frontText: frontText})
    }

    render () {
        return (
            <DndProvider backend={Backend}>
				<div onClick={this.closeDropdownOnTouchOutside} style={{textAlign: "center"}}>
					<div className="dropdown-headers" >
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect}  items={advancements} header="Advancement"  dropdownClass="dropdown-content-1" />
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect}  items={drawBacks} header="Draw Backs" dropdownClass="dropdown-content-2"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect}  items={punishments} header="Punishments" dropdownClass="dropdown-content-3"/>
						<Dropdown onDefaultCardSelect={this.newDefaultCardSelect}  items={games} header="Games" dropdownClass="dropdown-content-4"/>
					</div>
					{console.log("text: " + this.state.frontText)}
					<DefaultCard onDefaultCardSelect={this.newDefaultCardSelect} frontText={this.state.frontText} backText="Player must advance by three spaces" background="#b0e0e6" />
				{/* <Tile onDefaultCardSelect={this.newDefaultCardSelect} frontText={this.state.frontText} backText="Player must advance by three spaces" background="#b0e0e6"></Tile> */}
			</div>
        </DndProvider>);
    }
}

export default EditableTileWithDropdowns;