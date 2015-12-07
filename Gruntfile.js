/**
 * Created by Vlad on 05.12.2015.
 */
module.exports = function (grunt) {

  grunt.initConfig({
    requirejs: {
      js: {
        options: {
          uglify2: {
            mangle: false
          },
          baseUrl: "public/js",
          mainConfigFile: "public/js/bootstrap.js",
          name: 'bootstrap',
          out: "build/js/bootstrap.js",
          optimize: 'uglify2'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/styles.min.css': ['public/css/styles.css', 'public/components/bootstrap/dist/css/bootstrap.min.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'build/index.html': ['public/index.html']
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['components/**'],
          dest: 'build/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs', 'cssmin', 'processhtml', 'copy']);
  grunt.registerTask('testCopy', ['copy']);

};