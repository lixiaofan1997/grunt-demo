module.exports = function (grunt) {
  grunt.initConfig({
        cssmin: {  
              'rectangle.min.css': 'rectangle.css'
            }
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
     target: {
      files: {
            'output.css': ['foo.css', 'bar.css']
        
      }
             
  }
                  
  });

      grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', ['cssmin']); 

};
