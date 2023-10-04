import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StaticImage } from 'gatsby-plugin-image';
import { GITHUB_PROFILE } from '../../utils/constants';

const Projects = () => {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		}
	}, [inView, animation]);

	const list = {
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
		},
	};

	return (
		<div
			ref={ref}
			data-scroll-section
			id="container"
			className="text-graphite m-auto w-screen pt-14 h-full"
		>
			<motion.div
				className="flex flex-col max-w-6xl space-y-12 md:space-y-0 text-center md:text-left md:flex-row md:space-x-10 justify-between w-3/4 h-10/12 m-auto"
				id="portfolio"
				initial="hidden"
				animate={animation}
				variants={list}
			>
				<motion.div
					className="flex flex-row space-x-2 m-auto md:m-0 md:flex-col md:space-y-2 w-full md:w-1/4 h-full text-4xl font-display"
					data-scroll
					data-scroll-sticky
					data-scroll-target="#container"
					variants={list}
				>
					<p>Featured</p>
					<p className="md:ml-8">Projects</p>
				</motion.div>

				<div className="flex flex-col space-y-20 md:space-y-0 w-full md:w-3/4 h-full text-center">
					<motion.div
						data-scroll
						data-scroll-delay=".1"
						data-scroll-speed="5"
						variants={list}
					>
						<StaticImage
							className="mb-4"
							src={'../../images/screenShots/overmind.png'}
							alt="Personal portfolio project"
						/>
						<ProjectCard
							name={'Overmind Web3'}
							tags={[
								'Aptos',
								'Move',
								'TypeScript',
								'Next.js',
								'Web3',
								'Blockchain',
								'Smart Contracts',
								'NFTs',
								'DeFi',
								'Gaming',
							]}
							github={GITHUB_PROFILE}
							liveDemo={'https://overmind.xyz/@krissolui'}
							alt={'Image of Overmind profile'}
							description={
								'Ranked at the top 1% among 4000+ blockchain developers. Compete in developing Aptos Move smart contracts and frontend decentralized applications (dApps).'
							}
						/>
					</motion.div>
					<div
						data-scroll
						data-scroll-delay=".1"
						data-scroll-speed="5"
					>
						<StaticImage
							className="mb-4"
							src={
								'../../images/screenShots/coffee-connoissear.png'
							}
							alt="Personal portfolio project"
						/>
						<ProjectCard
							name={'Coffee Connoisseur'}
							tags={[
								'TypeScript',
								'Next.js',
								'RESTful APIs',
								'Serverless',
								'CDN',
							]}
							liveDemo={
								'https://discover-coffee-stores.krissolui.com/'
							}
							github={`${GITHUB_PROFILE}/discover-coffee-stores`}
							alt={
								'Screenshot of Coffee Connoisseur, a community coffee stores voting web application'
							}
							description={
								'An frontend web application that allow users to discover their local coffee stores and upvote them.'
							}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Projects;
