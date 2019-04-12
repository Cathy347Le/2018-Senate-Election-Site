import React, { Component } from "react";

const demTextBold = {
  fontWeight: "bold",
  color: "blue"
};

const repTextBold = {
  fontWeight: "bold",
  color: "red"
};

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = { race: props.race };
  }
  render() {
    // console.log(this.props.race);
    // console.log(this.state.race);
    return (
      <table>
        <thead>
          <tr>
            <th>
              {this.state.race.stateShort} <span>SENATE</span>
            </th>
            <th className="header-2">Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr style={this.state.race.winner === "demCand" ? demTextBold : null}>
            <td>{this.state.race.demLast}</td>
            <td>{this.state.race.demPercent}%</td>
          </tr>
          <tr style={this.state.race.winner === "repCand" ? repTextBold : null}>
            <td>{this.state.race.repLast}</td>
            <td>{this.state.race.repPercent}%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Race;
