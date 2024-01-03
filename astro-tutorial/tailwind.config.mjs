/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        default: 'var(--color-text-default)',
        muted: 'var(--color-text-muted)',
		  },
		  fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			heading: [...defaultTheme.fontFamily.sans],
		  },
		  backgroundImage: {
			'hero-pattern':"url('/src/assets/images/hero.jpg')"
		  }
		},
	  },
	  plugins: [require('@tailwindcss/typography')],
	  darkMode: 'class',
}


// :root {
//     --font-sans: 'Inter Variable';
//     --font-serif: var(--font-sans);
//     --font-heading: var(--font-sans);

//     --color-primary: rgb(30 64 175);
//     --color-secondary: rgb(30 58 138);
//     --color-accent: rgb(109 40 217);

//     --color-text-heading: rgb(0 0 0); 
//     --color-text-default: rgb(16 16 16);
//     --color-text-muted: rgb(16 16 16 / 66%);
//     --color-bg-page: rgb(255 255 255);

//     --color-bg-page-dark: rgb(3 6 32);
//   }