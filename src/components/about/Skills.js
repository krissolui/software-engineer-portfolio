import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	javascript,
	typescript,
	html,
	css,
	react,
	nextjs,
	tailwind,
	npm,
	netlify,
	git,
	sass,
	mongodb,
	docker,
	nodejs,
	golang,
	java,
	rust,
	bash,
	solidity,
	materialui,
	postgres,
	mysql,
	terraform,
	ansible,
	postman,
	linux,
	aws,
	swagger,
	mocha,
	gitbook,
	jira,
	slack,
	yarn,
	sql,
	vercel,
} from '../../images/icons';

function Skills() {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		}
	}, [inView, animation]);

	const header = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
				duration: 1,
			},
		},
		hidden: {
			y: '5vw',
			opacity: 0,
		},
	};

	const icons = {
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
			className="flex flex-col max-w-6xl space-y-12 lg:space-y-24  w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4"
		>
			<div className="flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 w-full text-center lg:text-left m-auto">
				<motion.h1
					initial="hidden"
					animate={animation}
					variants={header}
					className="font-display text-4xl lg:w-1/4"
				>
					Skills
				</motion.h1>
				<motion.p
					initial="hidden"
					animate={animation}
					variants={header}
					className="font-body lg:text-lg leading-loose lg:leading-loose lg:w-3/4"
				>
					Experienced in building backend APIs in TypeScript, Node.js,
					Express.js and PostgreSQL, as well as modern web
					applications with React, Next.js and Sass. Learnt various
					programming languages and frameworks to build applications
					with different usages and requirements. Currently exploring
					Golang and MongoDB.
				</motion.p>
			</div>

			<div className="flex flex-col w-full text-center space-y-24 lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 lg:divide-x divide-opacity-30 divide-graphite text-center justify-between">
				<motion.div
					className="w-full lg:w-1/2"
					initial="hidden"
					animate={animation}
					variants={header}
				>
					<motion.h2
						variants={header}
						className="font-display text-lg"
					>
						Languages and Frameworks
					</motion.h2>
					<motion.ul
						variants={header}
						className="grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14"
					>
						<motion.li variants={icons} className="icon">
							{javascript}JavaScript
						</motion.li>
						<motion.li variants={icons} className="icon">
							{typescript}TypeScript
						</motion.li>
						<motion.li variants={icons} className="icon">
							{nodejs}Node.js
						</motion.li>
						<motion.li variants={icons} className="icon">
							{react}React
						</motion.li>
						<motion.li variants={icons} className="icon">
							{nextjs}Next.js
						</motion.li>
						<motion.li variants={icons} className="icon">
							{golang}Golang
						</motion.li>
						<motion.li variants={icons} className="icon">
							{java}Java
						</motion.li>
						<motion.li variants={icons} className="icon">
							{rust}Rust
						</motion.li>
						<motion.li variants={icons} className="icon">
							{sql}SQL
						</motion.li>
						<motion.li variants={icons} className="icon">
							{bash}Bash
						</motion.li>
						<motion.li variants={icons} className="icon">
							{solidity}Solidity
						</motion.li>
						<motion.li variants={icons} className="icon">
							{mocha}Mocha
						</motion.li>
						<motion.li variants={icons} className="icon">
							{tailwind}Tailwind
						</motion.li>
						<motion.li variants={icons} className="icon">
							{materialui}Material UI
						</motion.li>
						<motion.li variants={icons} className="icon">
							{sass}Sass
						</motion.li>
						<motion.li variants={icons} className="icon">
							{html} HTML5
						</motion.li>
						<motion.li variants={icons} className="icon">
							{css} CSS3
						</motion.li>
					</motion.ul>
				</motion.div>
				<motion.div
					className="w-full lg:w-1/2"
					initial="hidden"
					animate={animation}
					variants={header}
				>
					<motion.h2
						variants={header}
						className="font-display text-lg"
					>
						Development Tools
					</motion.h2>
					<motion.ul
						variants={header}
						className="grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14"
					>
						<motion.li variants={icons} className="icon">
							{linux}Linux
						</motion.li>
						<motion.li variants={icons} className="icon">
							{git}Git
						</motion.li>
						<motion.li variants={icons} className="icon">
							{aws}AWS
						</motion.li>
						<motion.li variants={icons} className="icon">
							{docker}Docker
						</motion.li>
						<motion.li variants={icons} className="icon">
							{npm}npm
						</motion.li>
						<motion.li variants={icons} className="icon">
							{yarn}Yarn
						</motion.li>
						<motion.li variants={icons} className="icon">
							{postman}Postman
						</motion.li>
						<motion.li variants={icons} className="icon">
							{postgres}PostgreSQL
						</motion.li>
						<motion.li variants={icons} className="icon">
							{mysql}MySQL
						</motion.li>
						<motion.li variants={icons} className="icon">
							{mongodb}MongoDB
						</motion.li>
						<motion.li variants={icons} className="icon">
							{vercel}Vercel
						</motion.li>
						<motion.li variants={icons} className="icon">
							{netlify}Netlify
						</motion.li>
						<motion.li variants={icons} className="icon">
							{terraform}Terraform
						</motion.li>
						<motion.li variants={icons} className="icon">
							{ansible}Ansible
						</motion.li>
						<motion.li variants={icons} className="icon">
							{swagger}Swagger
						</motion.li>
						<motion.li variants={icons} className="icon">
							{gitbook}GitBook
						</motion.li>
						<motion.li variants={icons} className="icon">
							{jira}JIRA
						</motion.li>
						<motion.li variants={icons} className="icon">
							{slack}Slack
						</motion.li>
					</motion.ul>
				</motion.div>
			</div>
		</div>
	);
}

export default Skills;
