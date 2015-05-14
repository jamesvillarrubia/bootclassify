module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {                       // Target options 
        			style: 'expanded'
      			},
				files: {
					'css/bootclassify-sass.css' : 'bootclassify.scss'
				}
			}
		},
    	less: {
	      development: {
	        files: {
	          "css/bootclassify-less.css": "bootclassify.less",
	        }
	      }
	    },
	    autoprefixer: {
	      no_dest_multiple: {
	        src: 'css/*.css', // -> src/css/file1.css, src/css/file2.css
	      }
	    },
	    watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			styles: {
		        files: ['css/less/**/*.less'], // which files to watch
		        tasks: ['less'],
		        options: {
		          nospawn: true
		        }
		    }
		},
		cssmin:{
			options: {
			    advanced: true,
			    roundingPrecision: -1
			},
			target: {
			    files: {
			      'css/bootclassify-sass.min.css': "css/bootclassify-sass.css",
			      "css/bootclassify-less.min.css": "css/bootclassify-less.css",

			    }
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default', ['sass', 'less', 'autoprefixer','cssmin','watch']);

}