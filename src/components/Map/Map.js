import React, { Component } from "react";
// import d3 from "d3";
// import topojson from "topojson";
import Datamap from "datamaps/dist/datamaps.usa.min";
import ReactDOM from "react-dom";
import "./Map.css";

class DataMap extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: "usa",
      geographyConfig: {
        highlightBorderColor: "yellow",
        highlightBorderWidth: 5,
        popupTemplate: (geography, data) =>
          `<div class='hoverinfo'>
          <strong>
          ${geography.properties.name}
          </strong>
          <table><tr><th>candidate</th><th>votes</th><th>percent</th></tr>
          <tr><td>
          ${data.demFirst} ${data.demLast}
          </td><td>
          ${data.demPercent}%
          </td><td>
          ${data.demVote}
          </td></tr><tr><td>
          ${data.repFirst} ${data.repLast}
          </td><td>
          ${data.repPercent}%
          </td><td>
          ${data.repVote}
          </td></tr></table></div>`
      },
      fills: {
        Republican: "red",
        Democrat: "blue",
        defaultFill: "lightgray"
      },
      data: {
        AZ: {
          fillKey: "Democrat",
          stateLong: "Arizona",
          stateShort: "AZ",
          demFirst: "Kyrsten",
          demLast: "Sinema",
          demVote: "1,191,100",
          demPercent: 50,
          repFirst: "Martha",
          repLast: "McSally",
          repVote: "1,135,200",
          repPercent: 47.6,
          othFirst: "Other",
          othLast: "candidates",
          othVote: "57,442",
          othPercent: 2.4,
          winner: "demCand"
        },
        TX: {
          fillKey: "Republican",
          stateLong: "Texas",
          stateShort: "TX",
          demFirst: "Beto",
          demLast: "O'Rourke",
          demVote: "4,045,632",
          demPercent: 48.3,
          repFirst: "Ted",
          repLast: "Cruz",
          repVote: "4,260,553",
          repPercent: 50.9,
          othFirst: "Other",
          othLast: "candidates",
          othVote: "65,470",
          othPercent: 0.8,
          winner: "repCand"
        }
      }
    });
  }
  render() {
    return (
      <div
        id="map-container"
        style={{
          position: "relative",
          margin: "0 auto",
          width: "1120px",
          height: "700px",
          color: "black"
        }}
      />
    );
  }
}

export default DataMap;
