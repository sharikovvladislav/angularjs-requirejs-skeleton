/**
 * Created by Vlad on 23.04.2016.
 */

module.exports = function () {
  return {
    build: {
      root: 'build',
      port: 8081,
      showDir: true,
      autoIndex: true,
      ext: "html",
      runInBackground: false,
      openBrowser: true
    },
    dev: {
      root: 'public',
      port: 8080,
      showDir: true,
      autoIndex: true,
      ext: "html",
      runInBackground: false,
      openBrowser: true
    }
  };
};