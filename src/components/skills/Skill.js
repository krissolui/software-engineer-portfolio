import React from 'react';
import { motion } from 'framer-motion';

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

const Skill = (props) => {
	return (
		<motion.li variants={icons} className="icon" key={props.name}>
			{props.img}
			{props.name}
		</motion.li>
	);
};

export default Skill;
