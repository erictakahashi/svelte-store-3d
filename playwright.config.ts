import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Collect trace when retrying the failed test, when not in CI. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'off' : 'on-first-retry'
	},
	testDir: 'src',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
