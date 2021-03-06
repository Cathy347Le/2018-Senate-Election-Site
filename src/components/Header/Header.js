import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h2>U.S. Senate Election Results 2018</h2>
        <p>
          "Republicans are on offense in the Senate, where they’re hoping to add
          to their current two-seat majority. Ten Democratic senators are facing
          re-election in states President Trump won in 2016, five of which he
          took by double digits. To have a chance at controlling the Senate at
          the end of the night, Democrats will have to cut their losses in these
          10 states, pick up seats in states like Nevada and Arizona -- two
          states that have been trending blue in recent years -- and potentially
          flip a seat in a traditionally red state like Tennessee or Texas. It’s
          an uphill climb for Democrats, who lost control of the Senate during
          the 2014 midterms." -<span className="CNN-source">CNN</span>
        </p>
      </div>
    );
  }
}

export default Header;
