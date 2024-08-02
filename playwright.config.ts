import { type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: [
		{
			command: `yarn build:preview`,
			url: `http://localhost:3000`,
			stderr: `pipe`,
			stdout: `pipe`,
		},
	],
	timeout: 60 * 1000,
	expect: {
		timeout: 60 * 1000,
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
