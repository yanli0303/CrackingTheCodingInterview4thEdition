module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        'karma': {
            'unit': {
                'configFile': 'karma.js',
                'options': {
                    'files': [
                        'test/*.js',
                        'src/*.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('test', ['karma:unit']);
};