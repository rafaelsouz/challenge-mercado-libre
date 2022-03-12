module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/__mocks__/fileMock.js'
  }
};
