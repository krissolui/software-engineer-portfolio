require('dotenv').config({
	path: `.env`,
});
module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.krissolui.com',
		title: 'Kris Lui | Full Stack Software Engineer',
		description:
			'Kris Lui is a full stack software engineer passionated in impactful, user-friendly software applications.',
		author: 'Kris Lui',
		image: '',
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Kris Lui Portfolio`,
				short_name: `Portfolio`,
				start_url: `/`,
				icon: `src/images/KL-dark-transparent.png`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
			},
		},
		`gatsby-plugin-offline`,
	],
};
