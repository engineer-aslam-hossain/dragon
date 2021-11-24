module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		maxWidth: {
			114: '36rem',
			72: '18rem',
			28: '7rem',
			80: '20rem',
			64: '16rem',
			52: '13rem',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
