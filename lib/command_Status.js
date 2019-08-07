"use strict";

var grunt = require("grunt");
var ArgUtil = require("flopmang");

module.exports = function (task, exec, done) {
	var options = task.options({});
	var argUtilInvoke = new ArgUtil(task, [
		{
			option: "computername",
			defaultValue: process.env.COMPUTERNAME,
			useAsFlag: true,
			useValue: true,
			useDasherize: false,
			flag: "-ComputerName"
		},
		{
			option: "credential",
			defaultValue: null,
			useAsFlag: true,
			useValue: true,
			useDasherize: false,
			flag: "-Credential"
		}
	]);

	var argUtil = new ArgUtil(task, [
		{
			option: "name",
			defaultValue: null,
			useAsFlag: true,
			useValue: true,
			useDasherize: false,
			flag: "-Name",
			required: true
		}
	]);

	function handleResult(err, result) {
		if (err) {
			grunt.fail.fatal("Error running Status-WebAppPool");
			return;
		}

		if (typeof options.callback === "function") {
			options.callback(result.stdout);
		}
		done();
	}

	var args = ["Invoke-Command"].concat(argUtilInvoke.getArgFlags());
	args.push("-ScriptBlock");
	args.push("{ Import-Module WebAdministration; Get-WebAppPoolState " + argUtil.getArgFlags().join(" ") + " }");
	args.push(handleResult);
	exec.apply(null, args);
};

module.exports.description = "Gets the run-time state of an IIS application pool.";

