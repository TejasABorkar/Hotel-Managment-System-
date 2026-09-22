/**
 * Jest Configuration for Selenium E2E Tests
 * Hotel Room Booking System
 */

module.exports = {
  displayName: 'Selenium E2E Tests',
  testEnvironment: 'node',
  testTimeout: 600000, // 10 minutes for Chrome initialization
  maxWorkers: 1, // Run tests sequentially
  verbose: true,
  collectCoverage: false,
  
  // Test file patterns
  testMatch: ['**/*.e2e.test.js', '**/*.test.js'],
  
  // Setup and teardown
  setupFilesAfterEnv: [],
  
  // Reporter configuration
  reporters: ['default'],

  // Module settings
  moduleFileExtensions: ['js', 'json'],
  
  // Logging
  bail: false, // Continue running tests even if one fails
};
