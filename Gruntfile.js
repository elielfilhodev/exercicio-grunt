module.exports = function(grunt) {
  // Configuração do Grunt
  grunt.initConfig({
    // Configuração do LESS
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less"
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.min.css": "less/style.less"
        }
      }
    },

    // Configuração do Uglify para compressão de JavaScript
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },

    // Configuração do Watch para monitorar mudanças
    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // Carregar plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Registrar tarefas
  grunt.registerTask('default', ['less', 'uglify']);
  grunt.registerTask('build', ['less:production', 'uglify']);
  grunt.registerTask('dev', ['less:development', 'uglify', 'watch']);
};
