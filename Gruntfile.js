module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n'
      },
      js: {
        // the files to concatenate
        src: ['src/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/* <%= pkg.name %> ver.<%= pkg.version %><%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    watch: {
      js:{
        files:['src/**/*.js'],
        tasks:['concat', 'uglify']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['concat', 'uglify']);

};