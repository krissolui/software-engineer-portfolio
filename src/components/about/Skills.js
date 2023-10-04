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
import Skill from '../skills/Skill';

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
						className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-y-16 justify-items-center font-body text-sm pt-14"
					>
						<Skill img={javascript} name="JavaScript" />
						<Skill img={typescript} name="TypeScript" />
						<Skill img={nodejs} name="Node.js" />
						<Skill img={react} name="React" />
						<Skill img={nextjs} name="Next.js" />
						<Skill img={golang} name="Golang" />
						<Skill img={java} name="Java" />
						<Skill img={rust} name="Rust" />
						<Skill img={sql} name="SQL" />
						<Skill img={bash} name="Bash" />
						<Skill img={solidity} name="Solidity" />
						<Skill img={mocha} name="Mocha" />
						<Skill img={tailwind} name="Tailwind" />
						<Skill img={materialui} name="Material UI" />
						<Skill img={sass} name="Sass" />
						<Skill img={html} name=" HTML5" />
						<Skill img={css} name=" CSS3" />
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
						className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-y-16 justify-items-center font-body text-sm pt-14"
					>
						<Skill img={linux} name="Linux" />
						<Skill img={git} name="Git" />
						<Skill img={aws} name="AWS" />
						<Skill img={docker} name="Docker" />
						<Skill img={npm} name="npm" />
						<Skill img={yarn} name="Yarn" />
						<Skill img={postman} name="Postman" />
						<Skill img={postgres} name="PostgreSQL" />
						<Skill img={mysql} name="MySQL" />
						<Skill img={mongodb} name="MongoDB" />
						<Skill img={vercel} name="Vercel" />
						<Skill img={netlify} name="Netlify" />
						<Skill img={terraform} name="Terraform" />
						<Skill img={ansible} name="Ansible" />
						<Skill img={swagger} name="Swagger" />
						<Skill img={gitbook} name="GitBook" />
						<Skill img={jira} name="JIRA" />
						<Skill img={slack} name="Slack" />
					</motion.ul>
				</motion.div>
			</div>
		</div>
	);
}

export default Skills;
