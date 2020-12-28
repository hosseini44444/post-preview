/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!jest.config.js",
    "!**/*.test.js",
  ],
  coverageProvider: "babel",
  // coverageReporters: ["json", "html", "text", "lcov", "clover"],
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: ".+\\.(test|spec)\\.[jt]sx?$",
  testPathIgnorePatterns: ["/node_modules/", "/tests/", "/coverage/"],
  moduleDirectories: ["node_modules", "<rootDir>"],
};
