import React, { Component } from "react";
import d3 from "d3";
import topojson from "topojson";
import Datamap from "datamaps/dist/datamaps.usa.min";
import ReactDOM from "react-dom";
// import "./Map.css";

class DataMap extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: "usa",
      geographyConfig: {
        highlightBorderColor: "red",
        highlightBorderWidth: 5,
        popupTemplate: (geography, data) =>
          `<div class='hoverinfo'>${
            geography.properties.name
          } Electoral Votes: ${data.electoralVotes}`
      },
      fills: {
        Republican: "#CC4731",
        Democrat: "#306596",
        HeavyDemocrat: "#667FAF",
        LightDemocrat: "#A9C0DE",
        HeavyRepublican: "#CA5E5B",
        LightRepublican: "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "Republican",
          electoralVotes: 5
        },
        CO: {
          fillKey: "LightDemocrat",
          electoralVotes: 5
        },
        DE: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        FL: {
          fillKey: "UNDECIDED",
          electoralVotes: 29
        },
        GA: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        HI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ID: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        IL: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        IN: {
          fillKey: "Republican",
          electoralVotes: 11
        },
        IA: {
          fillKey: "LightDemocrat",
          electoralVotes: 11
        },
        KS: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        KY: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        LA: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        MD: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ME: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MN: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MS: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        MO: {
          fillKey: "Republican",
          electoralVotes: 13
        },
        MT: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NC: {
          fillKey: "LightRepublican",
          electoralVotes: 32
        },
        NE: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NV: {
          fillKey: "HeavyDemocrat",
          electoralVotes: 32
        },
        NH: {
          fillKey: "LightDemocrat",
          electoralVotes: 32
        },
        NJ: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        NY: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ND: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NM: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        OH: {
          fillKey: "UNDECIDED",
          electoralVotes: 32
        },
        OK: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        OR: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        PA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        RI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        SC: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        SD: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        TN: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        TX: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        UT: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        WI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        VA: {
          fillKey: "LightDemocrat",
          electoralVotes: 32
        },
        VT: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        WA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        WV: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        WY: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        CA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        CT: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        AK: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        AR: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        AL: {
          fillKey: "Republican",
          electoralVotes: 32
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
          color: "blue"
        }}
        fill={{ defaultFull: "blue" }}
      />
    );
  }
}

export default DataMap;
