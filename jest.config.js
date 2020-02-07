module.exports = {
	globalSetup: './setup.js',
	globalTeardown: './teardown.js',
	testEnvironment: './puppeteer_environment.js',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{js,jsx}",
		"!**/node_modules/**",
		"!**/coverage/**"
	],
	coverageReporters: ["html", "text"]
}
