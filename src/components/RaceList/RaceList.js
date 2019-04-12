import React, { Component } from "react";
import Race from "../Race/Race";

class RaceCardList extends Component {
  render() {
    // console.log(this.props.races);
    let racesArray = this.props.races.map((race, index) => {
      return <Race race={race} key={index} />;
    });
    return (
      <div>
        <div className="race-list flex-container">{racesArray}</div>
      </div>
    );
  }
}

export default RaceCardList;
