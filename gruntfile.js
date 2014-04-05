module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            jade: {
                files: ['server/views/**', 'server/admin/views/**'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['server/*.js', 'server/**/*.js', 'client/**/*.js', '!client/externals/**/*.js', '!client/lib/**/*.js', '!client/js/application.min.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['server/views/**', 'server/admin/views/**', 'client/**/*.html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['client/externals/css/**'],
                options: {
                    livereload: true
                }
            },
            grunt: {
                files: ['gruntfile.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: ['gruntfile.js', 'client/**/*.js', 'server/**/*.js'],
            options: {
                ignores: ['client/js/application.min.js', 'client/js/admin.min.js', 'client/externals/**/*.js', 'client/lib/**/*.js']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                beautify: false,
                mangle: true
            },
            dist: {
                files: {
                    'client/js/application.min.js' : [
                        //Application Init
                        'client/app.js',
                        'client/config.js',

                        //Application Services
                        'client/services/global.js',

                        // Confirmation
                        'client/confirmation/module.js',
                        'client/confirmation/controllers/confirmation.js',
                        'client/confirmation/directives/confirm.js',
                        'client/confirmation/services/confirm.js',

                        // Slides
                        'client/slides/module.js',
                        'client/slides/directives/slide-show.js',

                        // Modules
                        'client/modules/module.js',
                        'client/modules/controllers/module.js',

                        // Scope
                        'client/scope/module.js',
                        'client/scope/controllers/scope.js',
                        'client/scope/controllers/hierarchy.js',
                        'client/scope/controllers/ruleOfThumb.js',
                        'client/scope/controllers/helloGalaxy.js',
                        'client/scope/controllers/eventing.js',
                        'client/scope/controllers/broadcastListener.js',
                        'client/scope/controllers/emitListener.js',

                        // Services Topic
                        'client/servicesTopic/module.js',
                        'client/servicesTopic/controllers/services.js',
                        'client/servicesTopic/controllers/values.js',
                        'client/servicesTopic/controllers/service.js',
                        'client/servicesTopic/controllers/factory.js',
                        'client/servicesTopic/controllers/provider.js',
                        'client/servicesTopic/controllers/notificationsExample.js',
                        'client/servicesTopic/controllers/d3-example.js',
                        'client/servicesTopic/services/characters.js',
                        'client/servicesTopic/services/characterService.js',
                        'client/servicesTopic/services/characterFactory.js',
                        'client/servicesTopic/services/characterProvider.js',
                        'client/servicesTopic/services/d3.js',

                        // Directives Topic
                        'client/directivesTopic/module.js',
                        'client/directivesTopic/controllers/directives.js',
                        'client/directivesTopic/directives/button.js',
                        'client/directivesTopic/controllers/button.js',

                        // Greeting
                        'client/greeting/module.js',
                        'client/greeting/controllers/greeting.js',
                        'client/greeting/controllers/helloWorld.js',
                        'client/greeting/controllers/ngRepeat.js',
                        'client/greeting/controllers/ngShow.js',
                        'client/greeting/controllers/ngSwitch.js',

                        // Notifications
                        'client/notifications/module.js',
                        'client/notifications/controllers/notification.js',
                        'client/notifications/services/notifications.js',

                        // Promises
                        'client/promises/module.js',
                        'client/promises/controllers/promises.js',
                        'client/promises/controllers/lazyLoad.js',
                        'client/promises/controllers/all-promises.js',
                        'client/promises/services/books.js',
                        'client/promises/services/permissions.js',

                        'client/controllers/header.js',
                        'client/init.js'

                    ]
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['server', 'config'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 3222
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch', 'uglify'],
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/**/*.js']
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'concurrent', 'uglify']);

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest']);
};
