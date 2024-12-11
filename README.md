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

_____________________________________

typescript is better for medium to large projects while javascript is better for small projects 

> Getting started 

- make sure you have node installed 
- install typescript 

`npm i -g typescript`     or     `sudo i -g typescript`


- to verify installation run `tsc -v`

typescript is a superset of javascript 

- to run typescript file, in terminal, run `tsc yourfilename.ts`

TS syntax

`let age: number = 20`

if we try to reasign age to a string type `age = "a";`
we will get an error 

vs

`let age = 20 `



