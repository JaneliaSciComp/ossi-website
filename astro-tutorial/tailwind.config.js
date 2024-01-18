const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
			  },
			backgroundImage: {
				'hero-pattern':"url('/src/assets/images/hero.jpg')"
			}
	},
},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
}

