// The Grunt Wrapper
module.exports = function(grunt) {

  // Project configuration. Load the Config YAML
  var config = grunt.file.readYAML('Gruntconfig.yml');
  
  // Load the Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Configure the tasks
  require('./grunt_tasks/sass.js')(grunt, config);
  require('./grunt_tasks/javascript.js')(grunt, config);

  // Register the tasks
  grunt.registerTask('default', [
    'uglify',
    'concat',
    'jshint',
    // 'csslint',
    'watch'
  ]);
};