//Step 1 : Declare all the variables
const timeOfDay = "stormy night";
const place = "haunted house";
const mathResult = 10-3;
const booleanValue = timeOfDay.includes ("night");
const scaryThing = "ghost";
const scary = "glowing eyes";
const MathQuestion = "10-7";

const person ={
    name : "Chad", age : 25,};




//Step 2: Paste in one of the story templates above 
const story = `On a ${timeOfDay}, I ventured into the ${place}. 
The creaking walls seemed to whisper, sending chills down my spine. 
Suddenly, a ${scaryThing} appeared, its ${scary} piercing through the darkness.
 My heart raced as it floated silently toward me. Did you know ${MathQuestion} equals ${mathResult}? Spooky, right?
`;

//Step 3 : Display the story

document.getElementById("madlibs-output").textContent = story;

// Step 4: Log the story
console.log(story);``