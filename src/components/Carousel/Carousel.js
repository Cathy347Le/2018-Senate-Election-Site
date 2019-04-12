import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Race from "../Race/Race";

const CarouselStyle = {
  color: "black",
  border: "2px solid gray",
  width: "60%",
  margin: "0 auto"
};

class Carousel extends Component {
  render() {
    // console.log(this.props.races);
    let racesCarouselArray = this.props.races.map((race, index) => {
      return <Race race={race} key={index} />;
    });
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        items={5}
        nav
        style={CarouselStyle}
      >
        <div className="item ">{racesCarouselArray[0]}</div>
        <div className="item">{racesCarouselArray[1]}</div>
        <div className="item">{racesCarouselArray[2]}</div>
        <div className="item">{racesCarouselArray[3]}</div>
        <div className="item">{racesCarouselArray[4]}</div>
        <div className="item">{racesCarouselArray[5]}</div>
        <div className="item">{racesCarouselArray[6]}</div>
        <div className="item">{racesCarouselArray[7]}</div>
        <div className="item">{racesCarouselArray[8]}</div>
        <div className="item">{racesCarouselArray[9]}</div>
        <div className="item">{racesCarouselArray[10]}</div>
        <div className="item">{racesCarouselArray[11]}</div>
        <div className="item">{racesCarouselArray[12]}</div>
        <div className="item">{racesCarouselArray[13]}</div>
        <div className="item">{racesCarouselArray[14]}</div>
        <div className="item">{racesCarouselArray[15]}</div>
        <div className="item">{racesCarouselArray[16]}</div>
        <div className="item">{racesCarouselArray[17]}</div>
        <div className="item">{racesCarouselArray[18]}</div>
        <div className="item">{racesCarouselArray[19]}</div>
        <div className="item">{racesCarouselArray[20]}</div>
        <div className="item">{racesCarouselArray[21]}</div>
        <div className="item">{racesCarouselArray[22]}</div>
        <div className="item">{racesCarouselArray[23]}</div>
        <div className="item">{racesCarouselArray[24]}</div>
        <div className="item">{racesCarouselArray[25]}</div>
        <div className="item">{racesCarouselArray[26]}</div>
        <div className="item">{racesCarouselArray[27]}</div>
        <div className="item">{racesCarouselArray[28]}</div>
        <div className="item">{racesCarouselArray[29]}</div>
        <div className="item">{racesCarouselArray[30]}</div>
        <div className="item">{racesCarouselArray[31]}</div>
        <div className="item">{racesCarouselArray[32]}</div>
      </OwlCarousel>
    );
  }
}

export default Carousel;
