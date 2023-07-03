// JS Hands-on from Prework Mode3-3

function openRemark() {
    console.log("Here are the topics we learned through Prework:");
}

openRemark();


var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


//console.log(topics);

/*
var topic = "HTML";

if (topic === "HTML") {
    console.log("Let's study HTML!");
} else if (topic === "CSS") {
    console.log("Let's study CSS!");
} else if (topic === "Git") {
    console.log("Let's study Git!");
} else if (topic === "JavaScript") {
    console.log("Let's atusy JavaScript!");
} else {
    console.log("Please try again!");
}
*/

/*
for(var n = 0; n < topics.length; n++) {
    console.log(topics[n]);
}
*/

//var shape = "circle";
//console.log(shape);
//var shapes = ["triangle", "square", "pentagon", "circle"];

/*
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);
*/

/*
for(var x=0; x < shapes.length; x++) {
    console.log(shapes[x]);
}
*/



/*
console.log(topics);
var topics = "HTML, CSS, Git, JavaScript";
*/

/*
if (0) {
    console.log("I'm 0!")
 } else if (null) {
    console.log("I'm null!")
 } else if (true) {
    console.log("I'm true!")
 }
*/

/*
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

console.log(multiply(4,7))
*/

/*
function helloWorld() {
    // code block
    console.log("Hello World! I am a function!")
}

helloWorld();
*/

function listTopics() {
    for (var x = 0; x< topics.length; x++) {
        console.log(topics[x]);
    }
}


function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!");
    } else if (randomTopic === "Git") {
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}


listTopics();

console.log("Which topic should we study first?");

selectTopic();

//updated code

