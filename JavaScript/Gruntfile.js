module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        'karma': {
            'unit': {
                'configFile': 'karma.conf.js',
                'options': {
                    'files': [
                        'src/*.js',
                        'test/*.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('test', ['karma:unit']);
};