module.exports = function(grunt) {
  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['rectangle.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['csslint']);
};

