import React from 'react';

function HomeImage({ src, bgClass }) {
	return (
		<div className='relative w-[60vw] mx-[2vw] lg:w-[23vw] lg:mx-[1vw]'>
			<div 
				className={`${bgClass} p-[0.4rem] rounded-[1.2rem] lg:p-[0.8rem] lg:rounded-[3rem]`}
				style={{
					backdropFilter: 'blur(8px)',
				}}>
				<img className='rounded-[1rem] lg:rounded-[2.6rem]' src={src} alt='' />
			</div>
		</div>
	);

}

export default HomeImage;
