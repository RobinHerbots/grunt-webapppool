"use strict";

var command = require("../lib/commands").Start;
var Test = require("./_common");

describe("Start", function () {
	it("Start_WebAppPool -Name name", function (done) {
		var options = {
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-ScriptBlock", "{ Import-Module WebAdministration; Start-WebAppPool -Name name }"])
			.run(done);
	});

	it("Start_WebAppPool -Credential user\\domain -Name name", function (done) {
		var options = {
			credential: "user\\domain",
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-Credential", "user\\domain", "-ScriptBlock", "{ Import-Module WebAdministration; Start-WebAppPool -Name name }"])
			.run(done);
	});
});
