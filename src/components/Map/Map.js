import React, { Component } from "react";
// import d3 from "d3";
// import topojson from "topojson";
import Datamap from "datamaps/dist/datamaps.usa.min";
import ReactDOM from "react-dom";
import "./Map.css";
import MapSenateData from "./senateData.json";
import NoSenateRace from "./noSenData.json";

class DataMap extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: "usa",
      geographyConfig: {
        highlightOnHover: true,
        highlightBorderColor: "yellow",
        highlightBorderWidth: 4,
        highlightFillColor: false,
        popupTemplate: (geography, data) =>
          `<div class='hoverinfo'>
          <strong>
          ${geography.properties.name} SENATE
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
        Independent: "#8A2BE2",
        defaultFill: "lightgray"
      },
      data: MapSenateData
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
