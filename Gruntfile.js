/**
 * Created by Vlad on 05.12.2015.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      js: {
        options: {
          uglify2: {
            mangle: false
          },
          baseUrl: "js",
          mainConfigFile: "js/bootstrap.js",
          name: 'bootstrap',
          out: "build/bootstrap.js",
          optimize: 'uglify2'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);

};