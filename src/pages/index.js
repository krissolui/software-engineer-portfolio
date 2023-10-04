import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import LocomotiveScroll from 'locomotive-scroll';
import Experience from '../components/experience/Experience';

const IndexPage = () => {
	const scrollRef = useRef();

	useEffect(() => {
		let locomotiveScroll = new LocomotiveScroll({
			el: document.querySelector('.smooth-scroll'),
			smooth: true,
		});
		locomotiveScroll.update();
		window.scroll = locomotiveScroll;
		return () => {
			if (locomotiveScroll) locomotiveScroll.destroy();
		};
	});

	return (
		<div
			data-scroll-container
			ref={scrollRef}
			className="smooth-scroll bg-light-green overflow-hidden"
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Kris Lui | Software Engineer</title>
				<meta
					name="description"
					content="Personal portfolio website for Kris Lui with his bio, projects and contact information"
				/>
				<link rel="canonical" href="https://www.krissolui.com" />
				<html lang="en" />
			</Helmet>
			<Hero />
			<About />
			{/** <Experience /> **/}
			<Projects />
			<Contact />
		</div>
	);
};

export default IndexPage;
