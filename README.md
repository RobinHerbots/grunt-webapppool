# grunt-webapppool

> Grunt integration for Powershell WebAppPool commands

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webapppool --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webapppool');
```

## The "NewWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `NewWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  NewWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [New-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/new-webapppool).


## The "RemoveWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `RemoveWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  RemoveWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [Remove-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/remove-webapppool).


## The "RestartWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `RestartWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  RestartWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [Restart-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/restart-webapppool).


## The "StartWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `StartWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  StartWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [Start-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/start-webapppool).

## The "StatusWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `StatusWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  StatusWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [Status-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/get-webapppoolstate).

## The "StopWebAppPool" task

### Overview
In your project's Gruntfile, add a section named `StopWebAppPool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  StopWebAppPool: {
       your_target: {
            options: {
                computername: 'target computername,' +
                credential: 'user\domain',
                name: 'name of the app pool'
            }
       }
     }
});
```

### Options

#### options.computername
Type: `String`  
Default value: the local computername

Specifies the computers on which the command runs. The default is the local computer.

#### options.credential
Type: `String`  
Default value: the current user

Specifies a user account that has permission to perform this action. The default is the current user.

#### options.name
Type: `String`  
Default value: null

The name of the application pool for which the command is run.

For full details on all the possible codes, please see the [Stop-WebAppPool documentation](https://docs.microsoft.com/en-us/powershell/module/webadminstration/stop-webapppool).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).