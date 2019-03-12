'use strict';

var command = require('../lib/commands').Status;
var Test = require('./_common');

describe('Status', function () {
    it('Status_WebAppPool -Name name', function (done) {
        var options = {
            name: 'name'
        };

        new Test(command, options)
            .expect(['Invoke-Command', '-ComputerName', process.env.COMPUTERNAME, '-ScriptBlock', '{ Get-WebAppPoolState -Name name }'])
            .run(done);
    });

    it('Status_WebAppPool -Credential user\\domain -Name name', function (done) {
        var options = {
            credential: 'user\\domain',
            name: 'name'
        };

        new Test(command, options)
            .expect(['Invoke-Command', '-ComputerName', process.env.COMPUTERNAME, '-Credential', 'user\\domain', '-ScriptBlock', '{ Get-WebAppPoolState -Name name }'])
            .run(done);
    });
});
