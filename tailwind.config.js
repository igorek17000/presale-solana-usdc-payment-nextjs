const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
 			foxy: '#FF8C00D1',
		},
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': {transform: 'rotate(-2.1deg)'},
					'50%': {transform: 'rotate(2.1deg)'},
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
			fontFamily: {
				'fredoka': ['"Fredoka One"', 'cursive']
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	],
}