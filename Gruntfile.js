"use strict";

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			dev: {
				files: ["tasks/*.js", "lib/*.js", "test/*.js"],
				tasks: ["jshint", "test"]
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
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks("tasks");

	// These plugins provide necessary tasks.
	require("load-grunt-tasks")(grunt);

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask("test", ["eslint", "mochacli"]);

	// By default, lint and run all tests.
	grunt.registerTask("default", ["test"]);

};
