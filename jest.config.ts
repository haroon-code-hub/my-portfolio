// jest.config.ts
import nextJest from "next/jest";

// Provide the path to your Next.js app to load .env and Next config
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  // Make @/* imports work in tests
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // Pick up tests anywhere
  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"],
};

export default createJestConfig(customJestConfig);
