import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
} satisfies Config;
