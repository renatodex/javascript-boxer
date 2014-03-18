module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      pivotal : {
        src: [
        "source/boxer.js"
        ],
        options: {
          specs: [
            'spec/javascripts/tests/boxer_spec.js'
          ],
          helpers: [
            'spec/javascripts/helpers/jasmine-jquery.js'
          ],
          vendor: [
            "spec/javascripts/vendor/jquery-1.9.1.js",           
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  
  grunt.registerTask('default', ['jasmine']);

};