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
					default: "#B8BEDD",
					web: "#F0E6EF",
				},
				button: {
					cancel: "#CE2D4F",
					save: "#9EE493",
				},
				gunmetal: {
					deep: "rgba(28, 48, 65, 1)",
					nopacity: "rgba(28, 48, 65, 0.5)",
				},
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
