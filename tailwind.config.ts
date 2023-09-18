import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				border: "var(--border)",
				"code-primary": "var(--code-primary)",
				"code-secondary": "var(--code-secondary)",
				"code-accent": {
					DEFAULT: "var(--code-accent)",
					muted: "var(--code-accent-muted)",
				},
				"code-name": "var(--code-name)",
			},
			borderRadius: {
				lg: `calc(var(--radius) + 4px)`,
				md: "var(--radius)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				inconsolata: ["var(--font-inconsolata)"],
			},
			backgroundImage: {
				"radial-1": "radial-gradient(var(--radial-1))",
				"radial-2": "radial-gradient(var(--radial-2))",
				"radial-3": "radial-gradient(var(--radial-3))",
			},
		},
	},
	plugins: [],
};
export default config;
