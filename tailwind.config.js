module.exports = {
	purge: ["pages/**/*.js", "components/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"Cinzel-Variable-Font": "Cinzel-Variable-Font, sans-serif",
			},
			colors: {
				lavender: {
					blush: "#ffeaec",
					web: "#F0E6EF",
				},
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
