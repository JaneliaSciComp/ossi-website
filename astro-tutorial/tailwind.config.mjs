/** @type {import('tailwindcss').Config} */
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
			backgroundImage: {
				'hero-pattern':"url('/src/assets/images/hero.jpg')"
			}
	},
	plugins: [require('@tailwindcss/typography')],
}
}
