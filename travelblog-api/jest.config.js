module.exports = {
  preset: "@shelf/jest-mongodb",
  coveragePathIgnorePatterns: ["src/winston.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./src/__tests__/setup.js"],
  testMatch: ["**/__tests__/**/*.test.js", "**/__tests__/**/*.test.ts"],
};
