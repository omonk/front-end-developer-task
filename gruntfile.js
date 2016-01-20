module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass_directory_import: {
            your_target: { 
                files: {
                    src: ['css/sass/parts/_all.scss']
                },
            },
        },
        sass: {
            dist: {
                options: {
                    loadPath: require('node-bourbon').includePaths,
                    sourceMap: true
                },
                files: {
                    'css/style.css' : 'css/sass/style.scss',
                    'css/style-ie.css' : 'css/sass/style-ie.scss'
                }
            },
        },
        watch: {
            sass: {
                files: 'css/sass/**/*.scss',
                tasks: ['sass_directory_import','sass']
            },
            options: {
                livereload: true
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass-directory-import');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['sass', 'uglify']);

};