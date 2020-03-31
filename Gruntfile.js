"use strict";

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			dev: {
				files: ["tasks/*.js", "lib/*.js", "test/*.js"],
				tasks: ["eslint", "test"]
			}
		},
		eslint: {
			target:  [
				"Gruntfile.js",
				"tasks/*.js",
				"lib/*.js",
				"test/*.js"
			]
		},
		mochacli: {
			options: {
				files: "test/test_*.js"
			},
			spec: {
				options: {
					reporter: "spec",
					timeout: 10000
				}
			}
		},
		bump: {
			options: {
				files: ["package.json"],
				updateConfigs: ["pkg"],
				commit: true,
				createTag: true,
				push: true,
				pushTo: "origin",
				tagName: "v%VERSION%",
				tagMessage: `Version %VERSION% (${grunt.template.today("yyyymmdd")})}`
			}
		},
		availabletasks: {
			tasks: {
				options: {
					filter: "exclude",
					tasks: ["availabletasks", "default"],
					groups: "bytype"
				}
			}
		}

	});

	// These plugins provide necessary tasks.
	require("load-grunt-tasks")(grunt);
	grunt.registerTask("default", ["availabletasks"]);

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask("test", ["eslint", "mochacli"]);
};
