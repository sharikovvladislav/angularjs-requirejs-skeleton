/**
 * Created by Vlad on 23.04.2016.
 */

module.exports = function () {
  return {
    compile: {
      options: {
        uglify2: {
          mangle: true
        },
        baseUrl: "public/js",
        mainConfigFile: "public/js/bootstrap.js",
        name: 'bootstrap',
        out: "build/js/bootstrap.js",
        optimize: 'uglify2'
      }
    }
  }
};