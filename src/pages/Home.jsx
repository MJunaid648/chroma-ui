import React, { Component } from "react";
import HeroSection from "../sections/home/HeroSection";
import HeaderNormal from "../sections/HeaderNormal";
import HomeSection2 from "../sections/home/HomeSection2";
import VideoEditing from "../sections/home/VideoEditing";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderNormal />
        <HeroSection />
        <HomeSection2 />
        <VideoEditing />
      </div>
    );
  }
}

export default Home;
