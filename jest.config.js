module.exports = {
  transform: { "^.+\\.jsx?$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  transformIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/styleMock.js",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**", "!**/dist/**"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/router/", "/src/models/"],
};
