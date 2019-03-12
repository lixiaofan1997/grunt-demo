module.exports = function (grunt) {
  grunt.initConfig({
    imagesmin: {
      dynamic:{
        files:[ {
            expand: true,
            cwd: 'src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
                     
      }       
                  
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

      grunt.registerTask('default', ['imagemin']);

};
