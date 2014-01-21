module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Concatenate files
        concat: {
            js: {
                src: ['src/js/**/*.js', '!src/js/toc.js'],
                dest: 'dest/js/main.js'
            },
            css: {
                src: 'src/css/**/*.css',
                dest: 'dest/css/main.css'
            }
        },

        // Minify CSS files
        cssmin: {
            css: {
                src: 'dest/css/main.css',
                dest: 'dest/css/main.min.css'
            }
        },

        // Minify JS files
        uglify: {
            js: {
                files: {
                    'dest/js/main.min.js': 'dest/js/main.js',
                    'dest/js/toc.min.js': 'src/js/toc.js'
                }
            }
        },

        // Watch for changes
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['concat:js', 'uglify', 'shell:copyJS']
            },
            css: {
                files: ['src/css/*.css'],
                tasks: ['concat:css', 'cssmin', 'shell:copyCSS']
            },
            other: {
                files: ['resume/index.md', 'contact/index.html', 'labs/index.html', '_posts/*.markdown', '_config.yml', 'index.html'],
                tasks: ['shell:jekyllBuild']
            }
        },

        // Connect to server
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '_site/',
                    livereload: true
                }
            }
        },

        // Open localhost server
        open: {
            build: {
                path: 'http://localhost:4000/'
            }
        },

        // Shell
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            copyJS: {
                command: 'cp -R dest/js/* _site/dest/js/'
            },
            copyCSS: {
                command: 'cp -R dest/css/* _site/dest/css/'
            }
        }
    });

    grunt.registerTask('build', [
        'concat',
        'cssmin',
        'uglify',
        'shell:jekyllBuild'
    ]);

    grunt.registerTask('dev', [
        'connect',
        'open',
        'watch'
    ]);
};