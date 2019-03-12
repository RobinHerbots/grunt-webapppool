'use strict';

var command = require('../lib/commands').Remove;
var Test = require('./_common');

describe('Remove', function () {
    it('Remove_WebAppPool -Name name', function (done) {
        var options = {
            name: 'name'
        };

        new Test(command, options)
            .expect(['Invoke-Command', '-ComputerName', process.env.COMPUTERNAME, '-ScriptBlock', '{ Remove-WebAppPool -Name name }'])
            .run(done);
    });

    it('Remove_WebAppPool -Credential user\\domain -Name name', function (done) {
        var options = {
            credential: 'user\\domain',
            name: 'name'
        };

        new Test(command, options)
            .expect(['Invoke-Command', '-ComputerName', process.env.COMPUTERNAME, '-Credential', 'user\\domain', '-ScriptBlock', '{ Remove-WebAppPool -Name name }'])
            .run(done);
    });
});
