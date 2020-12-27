/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPresets } = require('ts-jest/presets');

const getTestMatch = (name) =>
  ['**/+([a-zA-Z])', name, '(spec|test).ts?(x)'].filter(Boolean).join('.');

const common = {
  rootDir: '.',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};

const web = {
  ...common,
  displayName: {
    name: 'Web',
    color: 'cyan',
  },
  testMatch: [getTestMatch()],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest/setup.ts'],
};

const server = {
  ...common,
  displayName: {
    name: 'Server',
    color: 'blue',
  },
  testMatch: [getTestMatch('server')],
  testEnvironment: 'node',
};

const getProjects = () => {
  const testEnv = process.env.TEST_ENV;
  if (!testEnv) {
    return [web, server];
  }

  switch (testEnv) {
    case 'web':
      return [web];
    case 'server':
      return [server];
  }
};

module.exports = {
  collectCoverageFrom: [
    '**/**/*.{ts,tsx}',
    '!**/**/*.test.{ts,tsx}',
    '!**/src/types/**',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  projects: getProjects(),
};
