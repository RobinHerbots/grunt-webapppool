"use strict";

var command = require("../lib/commands").Restart;
var Test = require("./_common");

describe("Restart", function () {
	it("Restart_WebAppPool -Name name", function (done) {
		var options = {
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-ScriptBlock", "{ Import-Module WebAdministration; Restart-WebAppPool -Name name }"])
			.run(done);
	});

	it("Restart_WebAppPool -Credential user\\domain -Name name", function (done) {
		var options = {
			credential: "user\\domain",
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-Credential", "user\\domain", "-ScriptBlock", "{ Import-Module WebAdministration; Restart-WebAppPool -Name name }"])
			.run(done);
	});
});
