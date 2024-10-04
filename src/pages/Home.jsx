import React, { Component } from 'react';
import HeroSection from '../sections/home/HeroSection';
import HeaderNormal from '../sections/HeaderNormal';

class Home extends Component {
	render() {
		return (
			<div>
				<HeaderNormal />
				<HeroSection />
			</div>
		);
	}
}

export default Home;
