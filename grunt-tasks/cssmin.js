/**
 * Created by Vlad on 23.04.2016.
 */

module.exports = function () {
  return {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: {
      files: {
        'build/css/styles.min.css': ['public/css/styles.css', 'public/components/bootstrap/dist/css/bootstrap.min.css']
      }
    }
  }
};