import React from 'react';
import HomeImage from './HomeImage';

function HomeImages({ className }) {
	return (
		<div className={`relative flex ${className}`}>
			<HomeImage src='/assets/images/landing-hero-1.jpg' bgClass={'bg-[#ffffff] lg:bg-[#ffffff]'} />      
			<HomeImage src='/assets/images/landing-hero-2.jpg' bgClass={'bg-[#ffffff] lg:bg-[#ffffff30]'} />
			<HomeImage src='/assets/images/landing-hero-3.jpg' bgClass={'bg-[#ffffff30]'} />
			<HomeImage src='/assets/images/landing-hero-4.jpg' bgClass={'bg-[#ffffff] lg:bg-[#ffffff30]'} />
			<HomeImage src='/assets/images/landing-hero-5.jpg' bgClass={'bg-[#ffffff] lg:bg-[#ffffff]'} />
		</div>
	);

}

export default HomeImages;
