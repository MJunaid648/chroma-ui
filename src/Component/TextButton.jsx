import React from 'react';

function TextButton({ children, className }) {
	return (
		<div 
			className={`relative text-white px-[2rem] py-[0.66rem] text-[0.8rem] lg:text-[1rem] lg:px-[3rem] lg:py-[1rem] rounded-[0.66rem] lg:rounded-[1rem] chroma-button ${className}`}
			style={{
				background: 'linear-gradient(0deg, #36108B 0%, #29145B 100%)',
				border: '1px solid #E4DDF6',
				boxShadow: '2px 19px 8px rgba(97, 51, 142, 0.01), 1px 11px 7px rgba(97, 51, 142, 0.02), 0px 5px 5px rgba(97, 51, 142, 0.03), 0px 1px 3px rgba(97, 51, 142, 0.04)',
				transition: 'background 0.5s ease',
			}}
			>
			<div
				className='rounded-[0.5rem] lg:rounded-[0.8rem]'
				style={{
					position: 'absolute',
					top: '0.25rem',
					left: '0.25rem',
					width: 'calc(100% - 0.5rem)',
					height: 'calc(100% - 0.5rem)',
					background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)',
				}}
			>
				<div
					className='rounded-[0.5rem] lg:rounded-[0.8rem]'
					style={{
						position: 'absolute',
						top: '1px',
						left: '1px',
						width: 'calc(100% - 2px)',
						height: 'calc(100% - 2px)',
						background: 'linear-gradient(0deg, #36108B 0%, #29145B 100%)',
						transition: 'background 0.5s ease',
					}}
				></div>
				<img
					className='pointer-events-none'
					style={{
						position: 'absolute',
						top: '0.25rem',
						left: '-45%',
						width: '100%',
						height: '120%',
					}}
					src='/assets/images/Button-Decoration.png' alt='' />
			</div>
			<div className='relative z-10 pointer-events-none'>
				{children}
			</div>
		</div>
	);

}

export default TextButton;
