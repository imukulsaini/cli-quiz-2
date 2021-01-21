// //assignment 2

var readlineSync = require('readline-sync');
console.log("Welcome This is Quiz App how well do you about India ? ")
const chalk = require('chalk');
const lineBreak = chalk.red('----------------------')

var score=0;

console.log(lineBreak)

var questionsBank =
[
  {
    question : " What is the state flower of Haryana ? Lotus or Golden Shower ",
    answer:"Lotus",
  },
  {
    question : "Which is the largest coffee producing state of India ?Kerala or Karnataka ",
    answer:"Karnataka",
  },
 {
    question : "Which state has the largest area ? Maharashtra or  Rajasthan",
    answer:"Rajasthan",
  },
  {
    question : "Which state has the largest population ? Uttar Pradesh or Maharashtra ",
    answer:"Uttar Pradesh",
  },
]

function takeQuestion(question, answer){

  var useranswer = readlineSync.question(chalk.green(question))

  if (useranswer === answer)
  
  {
    console.log(currentQuestions.answer)

  score = score+1;
  console.log(chalk.magenta("Your score is "), chalk.yellow(score ))

  console.log(lineBreak)

  }
 
}

for (i=0; i<questionsBank.length; i++){

var currentQuestions = questionsBank[i]
takeQuestion(currentQuestions.question ,currentQuestions.answer)

}
console.log(lineBreak)
console.log("Your Final score is ", score)
