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
