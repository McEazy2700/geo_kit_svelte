import { join } from 'path';
import type { Config } from 'tailwindcss';
import { myCustomTheme } from './src/lib/constants/theme';

import { skeleton } from '@skeletonlabs/tw-plugin';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton')),
		'../**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: { custom: [myCustomTheme] }
		})
	]
};

export default config;
