/**
 * Created by Vlad on 05.12.2015.
 */
module.exports = function (grunt) {
  var path = require('path');

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    configPath: path.join(process.cwd(), 'grunt-tasks'),
  });

  grunt.registerTask('build', ['requirejs', 'cssmin', 'processhtml', 'copy']);
  grunt.registerTask('run', ['build', 'http-server:build']);
  grunt.registerTask('http-dev', ['http-server:dev']);
  grunt.registerTask('http-prod', ['http-server:build']);
};