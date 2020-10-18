module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setupTestsAfterEnv.js'],
  testMatch: ['<rootDir>/**/*.spec.js'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/test/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/test/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['<rootDir>/**/*.js', '!src/index.js'],
  coverageReporters: ['text'],
};
