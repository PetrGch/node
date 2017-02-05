# node
## my summary.

***

### Lessons from Kantor's screencast.
#### [learn.javascript.ru](https://learn.javascript.ru/screencast/webpack "learn.javascript.ru")

***

### Lesson 1
#### Introduction

Comand `require` is necessary to import modules.
Comand `exports.<name>` is necessary to export modules. In this case **exports** will be object with diversity of variables and function
To create **global** variable we need export variables and function by using follow syntax `global.<name>`  

To import files from different directory we need search it by directory name but file shoud have the name - index.js 

### Lesson 2
#### Work with modules and object module

Variable **module** is in any file and contain all information about object
there is:
* id - full path to the file
* exports - this is what we get when we import this file
* parent - link to the parent module which require data
* filename - full name of the file
* loaded - check is this module loaded or not (true/false)
* children - modules which this file set up through `require`

**module.exports** - exports not an object but only function from modules
To import module without special path (require('db')) we need create folder `node_modules` in root directory 
**or**
Use in **cl** `NODE_PATH` like environment variable.
example: `NODE_PATH=. node <name>.js`

**Modules factory** or **logger**

### Lesson 
#### NPM

Add modules into NPM 

To make it possible you need:
- vreate file `package.json` by hand or due to command in **cl** `npm init` 
- add user `npm add user`
- publish module in central database `npm publish`
- to see all npm comand type `npm help`
- to update module type `npm up`

**Package.json**
- main set the point of enter to the package

### Lesson 3
#### Module **util** and how to use it

nothing concrete 

### Lesson 4
#### Debugging 

module **supervisor** listen all files' changes and restart server if it necessary
To install **supervisor** globally: `npm i -g supervisor`
To start **supervisor** just type `supervisor <filename>` instead of `node <filename>`  

Another tool is `node debug`

use word `debugger` in your code to stop code and watch some details;
To run with debug `node debug <filename>`
Also you can use `help` and `cont` - to continue running code and `repl` - to use console

Another tool is **node-inspector**

To install it `npm i -g node-inspector`
Start node with parameter `--debug` full command is `node --debug <filename>` 


### Lesson 11
#### Process or pass parameters into script through cls
 
Three ways to do it:

- To add in configuration file next lines: if you using IDE just add to the _Application parameters_ field `port=3000`
and to get it in the js code type `process.argv`. You will get array with parameters.
- Almost the same way is to use module **Optimist**. To more information follow to the link [optimist](https://github.com/substack/node-optimist)
- Using **Variable environments** (the best way on my point of view)
through IDE
    - add to the configuration file, to the field _Environment variables_ line `NODE_ENV` with value `development` or `production`
through CLS (Unix)
    - type to the terminal:
        - `export NODE_ENV= [value]`
        - other lines `supervisor -- <file name> -- [options]`
