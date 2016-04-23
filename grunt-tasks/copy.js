/**
 * Created by Vlad on 23.04.2016.
 */

module.exports = function () {
  return {
    main: {
      files: [{
        expand: true,
        cwd: 'public',
        src: ['components/**', 'partials/**'],
        dest: 'build/'
      }]
    }
  };
};