import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { navigate } from '@reach/router';

const Experience = () => {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		}
	}, [inView, animation]);

	const list = {
		visible: {
			y: 0,
			opacity: 1,
			staggerChildren: 1,
			delayChildren: 1,
			transition: {
				duration: 1.5,
			},
		},
		hidden: {
			y: '10vw',
			opacity: 0,
		},
	};

	return (
		<div
			data-scroll-section
			id="experience"
			className="flex flex-col divide-y divide-graphite min-h-screen w-full md:my-18"
		>
			<div ref={ref} className="mb-20 text-center h-full overflow-hidden">
				<motion.div
					className="m-auto w-11/12 md:w-3/4 max-w-3xl"
					initial="hidden"
					animate={animation}
					variants={list}
				>
					<div
						className="my-8 md:my-0 md:-ml-22 lg:-ml-36 md:mt-8 bg-black bg-opacity-90 font-display text-light-green 
				rounded-full h-24 w-24 flex items-center justify-center cursor-default"
						data-scroll
						data-scroll-direction="vertical"
						data-scroll-speed="-4"
					>
						<p className="tracking-wide transform transition duration-200 hover:scale-110 hover:tracking-wider hover:text-yellow-500">
							Work Experience
						</p>
					</div>
					{/** TODO::Loop through all experiences */}
				</motion.div>
			</div>
			<div className="w-3/4 m-auto max-w-6xl"></div>
		</div>
	);
};

export default Experience;
