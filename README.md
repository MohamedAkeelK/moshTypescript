# Notes

typescript is essentially javascript with type checking and more. catches errors at compile time. avoids having to run test later on

benefits

- static typing
- code completion
- refactoring
- shorthand notations

cons

- compiling ( browers dont understand typescript code, to solve we give our code to typescript compiler that converts it to javascript in a process called "transpilation" )
- more diciplined coding

---

typescript is better for medium to large projects while javascript is better for small projects

> Getting started

- make sure you have node installed
- install typescript

`npm i -g typescript` or `sudo i -g typescript`

- to verify installation run `tsc -v`

typescript is a superset of javascript

- to run typescript file, in terminal, run `tsc yourfilename.ts`

TS syntax

`let age: number = 20`

if we try to reasign age to a string type `age = "a";`
we will get an error

a javascript file will be generated after compiling
by default the compiler uses ES5 but you can configure it to target a newer JS version so generated js code is more modern

Configuration of the typescript compiler

run `tsc --init`
will create a file called tsconfig.json, is a large file of settings , some to keep in mind are

target which specifies the version of js that the compiler will generate. 2016 is safest for all browsers, can use higher target depending on where you want to deploy

another ones is
module:
rootDir: specifies the directory that cintains our source files

by convention we put our source code into a seperate folder

in Emit section
OutDir: specifies the directiory that will contain our js files
when compiled, js files will be store in "./dist" folder

removeComments : if enabled generated js code will be shorter

noEmitOnError: should leave on true so js files arent generated when there are errors in code

can run tsc to run all TS files
