import React, { Component } from "react";
import Header from "../Header/Header.js";
import StatusBar from "../StatusBar/StatusBar";
import Map from "../Map/Map.js";
import BarChart from "../BarChart/BarChart.js";
import PieChart from "../PieChart/PieChart.js";
import BubbleChart from "../BubbleChart/BubbleChart.js";
import ArticleList from "../ArticleList/ArticleList.js";
import Footer from "../Footer/Footer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: props.articles };
  }

  render() {
    return (
      <div className="App">
        <header className="header-content">
          <Header />`
        </header>
        <main>
          <div className="statusbar-content">
            <StatusBar />
          </div>
          <div className="map-content">
            <Map />
          </div>
          <div className="graphs-content">
            <h3 className="graphs-header component-header">
              Election at a Glance...
            </h3>
            <div className="graphs-row-one">
              <div>
                <BarChart />
              </div>
              <div>
                <PieChart />
              </div>
            </div>
            <div className="graphs-row-two">
              <div>
                <BubbleChart />
              </div>
            </div>
          </div>
          <div className="looking-ahead-content">
            <ArticleList articles={this.state.articles} />
          </div>
        </main>
        <footer>
          <div className="footer-content">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
