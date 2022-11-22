// Taking input from user
var readlineSync=require('readline-sync');
var userInput=readlineSync.question("What's your name? ");
// let's welcome user
console.log("Welcome "+ userInput + "!");
console.log("----Let's test your knowledge----");
 //Declaring this to count score
 var score=0;
// function to check answer
function test(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toLowerCase()==answer.toLowerCase())
  {
    
    console.log("You are Correct!");
    score=score+1;
  }
  else{
    console.log("You are wrong!");
    score=score-1;
  }
  console.log("Your current score:"+ score);
  console.log("---------------------------");
}
// calling the function
test("1.Which is the National Bird of India?","Peacock");
test("2.Which planet in our solar system is known as the Red Planet?","Mars");

// Function for multiple parameter

function checkAnswer(question,a,b,c,answer1){

 console.log(question+"\na: "+a+"\nb: "+b+"\nc: "+c);
  var userInput=readlineSync.question("Your answer:");
  if(userInput==answer1)
  {
    console.log("You are correct!");
    score=score+1;
  }
  else
  {
    console.log("You are Wrong");
    score=score-1;
  }
  console.log("Your score:"+score);
  console.log("-----------------");
}

// array of object
var multipleQuestions=[
  {
    question1:"3.Which planet in our solar system is known as the Blue Planet?\n ",
    a:"Mars\n",
    b:"Earth\n",
    c:"Venus\n",
   answer1:"b"
  },
     {
       question1:"4.Who invented the Computer?\n",
      a:"Charles Babbage\n",
      b:"Thomas Alva Edison\n",
      c:"Alexander Fleming\n",
    answer1:"a"
     },
  {
     question1:"5.Which is the National Animal of India?",
    a:"Lion",
    b:"Tiger",
    c:"Pigeon",
  answer1:"b"
  },
  {
    question1:"6. What is the capital of India?",
  a:"Ballarpur",
  b:"New Delhi",
  c:"Mumbai",
  answer1:"b"
  },{
   question1:"7.Which organ purify our blood?",
    a:"Heart",
    b:"Kidney",
    c:"Liver",
  answer1:"b"
  },
  {
    question1:"8.Who is the first woman prime minister of India?",
    a:"Priyanka Gandhi",
    b:"Soniya Gandhi",
    c:"Indira Gandhi",
  answer1:"c"
  },
{
  question1:"9. Name the planet nearest to the Earth?",
  a:"Mars",
  b:"Mercury",
  c:"Jupiter",
answer1:"b" 
},
  {
    question1:"10.Which is the longest river on the earth??",
    a:"Nile",
    b:"Yamuna",
    c:"Wardha",
  answer1:"a"
  }
]

for(var i=0;i<multipleQuestions.length;i++){
  currentPointer=multipleQuestions[i];
  checkAnswer(currentPointer.question1,currentPointer.a,currentPointer.b,currentPointer.c,currentPointer.answer1);
}

// data structure to store High scorebb
var highScore=[
  {
  Name:"Shruti",
  Score:10,
},
  {
    Name:"Shamu",
    Score:8,
  }
]
console.log("--Thanks for taking this challenge-- \n       Your Final Score:"+score);
console.log("---Highest Score of this Quiz---:");
for(var i=0;i<highScore.length;i++){  
console.log("Name:"+highScore[i].Name+"\nscore:"+highScore[i].Score);
}

console.log("Hey there! Please send me the screenshot if you have beaten up the score \n I will update your score in Highest Score ...");