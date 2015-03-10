module.exports = function(config) {
    config.set({
        autoWatch: false,
        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'junit', 'coverage'],
        junitReporter: {
            outputFile: 'build/logs/junit.xml',
            suite: 'unit'
        },
        coverageReporter: {
            dir: 'build/coverage/',
            reporters: [{
                type: 'html'
            }]
        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "src/*.js": "coverage"
        }
    });
};