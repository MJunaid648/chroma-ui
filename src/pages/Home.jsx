import React, { Component } from "react";
import HeroSection from "../sections/home/HeroSection";
import HeaderNormal from "../sections/HeaderNormal";
import HomeSection2 from "../sections/home/HomeSection2";
import VideoEditing from "../sections/home/VideoEditing";
import PlansPricing from "../sections/home/PlansPricing";
import ToolsYouNeed from "../sections/home/ToolsYouNeed";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderNormal />
        <HeroSection />
        <HomeSection2 />
        <VideoEditing />
        <PlansPricing/>
        <ToolsYouNeed/>
      </div>
    );
  }
}

export default Home;
