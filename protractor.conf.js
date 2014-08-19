module.exports = {
  config: {
    specs: [
      'test/e2e/spec/**/*.js'
    ],

    capabilities: {
      'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs',
      'browserName': 'phantomjs',
    },

    baseUrl: 'http://localhost:3333'
  }
};