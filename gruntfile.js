module.exports = function (grunt) {
    grunt.initConfig({
        clean: [
            "wwwroot"
        ],

        copy: {
            main: {
                files: [
                    { src: "JSfiles/bootstrap.js", dest: "bower_components/" }
                ]
            }
        },

        uglify: {
            my_target: {
                files: {
                    "bower_components/myproject.min.js": ["JSfiles/route.js", "JSfiles/route.js", "JSfiles/serviceCommon.js", "JSfiles/allfoodController.js", "JSfiles/breakfastController.js", "JSfiles/coffeeController.js", "JSfiles/dessertsController.js", "JSfiles/saladsController.js", "JSfiles/MyAccountController.js", "JSfiles/detail.js", "JSfiles/MyAccountController.js", "JSfiles/detail.js"]
                 //   "bower_components/myproject.min.js": ["JSfiles/allfoodController.js"]
                }
            }
        }

    });

    grunt.registerTask("default", ["clean", "copy", "uglify"]);
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};