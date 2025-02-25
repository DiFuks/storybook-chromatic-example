import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, `package.json`)));

const config: StorybookConfig = {
	stories: [`../src/**/*.mdx`, `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
	addons: [
		getAbsolutePath(`@storybook/addon-onboarding`),
		getAbsolutePath(`@storybook/addon-links`),
		getAbsolutePath(`@storybook/addon-essentials`),
		getAbsolutePath(`@storybook/addon-interactions`),
		{
			name: getAbsolutePath(`@chromatic-com/storybook`),
			options: {
				configFile: `chromatic-storybook.config.json`,
			},
		},
	],
	framework: {
		name: getAbsolutePath(`@storybook/react-vite`) as `@storybook/react-vite`,
		options: {},
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
