//The Console object provides access to the browser's debugging console
console.log("Hi VS code");
//Log a message and stack trace to console if the first argument is false.
let flag = true;
console.assert(flag);
//Log the number of times this line has been called with the given label.
console.count();

var user = "";

function greet() {
    //user the label passed to count
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
//console.time(label);
//label
//The name to give the new timer. 
//This will identify the timer; use the same name when calling console.timeEnd() to stop the timer and get the time output to the console.
console.time("uniqeNameForTimer");
// now call my own function to wait
wait(7000);
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 //Now call console.timeEnd with the same label and check the output
 console.timeEnd("uniqeNameForTimer");
 let dt = new Date();
 //console.dir is the way to see all the properties of a specified JavaScript object
 // in console by which the developer can easily get the properties of the object.
 console.dir([1,2,3]);
 console.warn("warning");
 //Creates a new inline group in the Web Console log.
 console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");