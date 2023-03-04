import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000/#!',
    specPattern: '../tests-cyano-shared/**/*.spec.js',
    excludeSpecPattern: ['**/UseDialogicComponent.spec.js'],
    defaultCommandTimeout: 10000,
    testIsolation: false,
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
});

