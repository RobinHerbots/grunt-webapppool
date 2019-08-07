"use strict";

var command = require("../lib/commands").Stop;
var Test = require("./_common");

describe("Stop", function () {
	it("Stop_WebAppPool -Name name", function (done) {
		var options = {
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-ScriptBlock", "{ Import-Module WebAdministration; Stop-WebAppPool -Name name }"])
			.run(done);
	});

	it("Stop_WebAppPool -Credential user\\domain -Name name", function (done) {
		var options = {
			credential: "user\\domain",
			name: "name"
		};

		new Test(command, options)
			.expect(["Invoke-Command", "-ComputerName", process.env.COMPUTERNAME, "-Credential", "user\\domain", "-ScriptBlock", "{ Import-Module WebAdministration; Stop-WebAppPool -Name name }"])
			.run(done);
	});
});
