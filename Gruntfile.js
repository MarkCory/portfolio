module.exports = function(grunt) {
	grunt.initConfig({
		watch:{
			options:{livereload:true},
			files:['AngularTests/**', 'server/**'],
			tasks:[],
			stylus:{
				files:[],
				tasks:['stylus:compile']
			},
			css:{
				options:{livereload:true},
				files:['ui/css/**.css']
			},
			html:{
				options:{livereload:true},
				files:['*.html']
			},
			script:{
				options:{livereload:true},
				files:['*.js']
			}
		},
		express:{
			all:{
				options:{
					port:3000,
					hostname:'localhost',
					bases:['./build/'],
					livereload:true
				}
			}
		},
		stylus:{
			compile:{
				options:{compress:true},
				files:{
					'build/ui/css/style.css':'ui/css/portfolio.css'
				}
			}
		},
		concat:{
			js:{
				src:['ui/js/angular.js', 'ui/js/angular-sanitize.js', 'ui/js/angular-route.js', 'ui/js/angular-pageslide-directive.min.js', 'ui/js/ng/portfolio.js'],
				dest:'build/ui/js/angular.js'
			}
		},
		uglify:{
			js:{
				src:['build/ui/js/angular.js'],
				dest:'build/ui/js/angular.js'
			}
		},
		clean:{
			tgt:'build'
		},
		copy:{
			main:{
				files:[
					{expand: true, src: ['*.php', '*.html', 'ui/img/*',], dest: 'build/', filter: 'isFile'},
					{expand: true, src: ['assets/**'], dest: 'build/', filter:'isFile'},
					{expand: true, src: ['ui/js/jquery-2.2.0.min.js', 'ui/js/ng/projects.json'], dest: 'build/', filter:'isFile'}
				]
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-express");
	grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.registerTask("server", ["express", "watch"]);
	grunt.registerTask('build', ['clean:tgt', 'stylus', 'concat', 'copy:main'])
	
};
