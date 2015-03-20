module.exports = function(grunt) {
  var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
  banner += '- <%= pkg.description %>\n<%= pkg.repository.url %>\n';
  banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'bin/*', 'lib/*'],
      options: {
        maxlen: 80,
        quotmark: 'single'
      },
      dev: ['gruntfile.js', 'bin/*', 'lib/*']
    },
    uglify: {
      options: {
        banner: banner
      },
      build: {
        files: {
          'build/<%= pkg.name %>.min.js':
            ['build/<%= pkg.name %>.js']
        }
      }
    },
    watch: {
      scripts: {
        options: {
          spawn: false
        },
        files: ['gruntfile.js', 'bin/*', 'lib/*'],
        tasks: ['development']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'Spec',
          captureFile: 'results.txt',
          quiet: false,
          clearRequireCache: false
        },
        src: ['tests/*.js']
      }
    }
  });


  var defaultTestSrc = grunt.config('mochaTest.test.src');
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('mochaTest.test.src', defaultTestSrc);
    if (filepath.match('tests/')) {
      grunt.config('mochaTest.test.src', filepath);
    }
  });

  grunt.registerTask('default', ['uglify', 'jshint']);
  grunt.registerTask('development', ['jslint']);
};