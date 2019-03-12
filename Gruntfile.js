module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
       separator: ';',
      },
      dist: {
       src: ['dist/calc.js', 'dist/rectangle.js'],
       dest: 'dist/handle.js',
      },
             
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};
