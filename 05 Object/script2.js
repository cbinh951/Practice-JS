//CODING CHALLENGE 

/*
1. Build a function constructor called Question descibe a question. A question should include:
a) Question itself 
b) the answer from which the player can choose the corect one (choose an adquate data 
structure here, array, object, etc)
c) correct answer (I would you a number for this)

2. Create a couple questions using the constructor 

3. Store theme all inside an array

4. Select one random question and log it on the console, together with the possible answers
(each question it should have a number) (Hint: write a method for the question object for
this task)

5. Use the 'prompt' function to ask the user for the correct answer. The user should input
the number of the correct answer such as you displayed it on Task 4

6. Check if the answer is correct and print to the console whether the answer is correct
ot nor (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make
sure that all your code is private and doesn't interface with the other programmers code
(Hint: we learned a special technique to do exactly that)


-------------- Expert Level -------------------
8. After you dislay the result, display the next random question, so that the game never ends
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game library never ends. So include the option to quit the
game if the user write 'exit' instead of the answer. In this case, DON'T call the function
from task 8

10. Track the user's score to make the game more fun! So each time an answer is correct, add
1 point to the score (Hint: I'm going to use the power of closure for this, but you don't 
have to, just do this with the tools you feel more comfortable at this point)

11. Display the score in the console. Use yet another method for this
*/

var Question = function(question, answersPlayer, correctAnswer) {
    this.question = question;
    this.answersPlayer = answersPlayer;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question('Who are you?', {0: '0. Binh', 1: '1. DD'}, 0);
var question2 = new Question('Where do you live?', {0: '0. HCM', 1: '1. VT', 2: '2. Can Tho'}, 1);
var question3 = new Question('What are you doing?', {0: '0. Reading', 1: '1. Writting', 2: '2. Code'}, 2);

var questions = [question1, question2, question3];
var scorePlayer = 0;

function showQuestion() {
    var showNumberQuestion = Math.floor(Math.random() * 3);
    console.log(questions[showNumberQuestion]['question']);
    for(var key in questions[showNumberQuestion]['answersPlayer']) {
        console.log(questions[showNumberQuestion]['answersPlayer'][key]);
    }
    showAnswerPlayer(showNumberQuestion);
}

function showAnswerPlayer(nuberQuestion) {
    var question = prompt("Please select the correct answer");
    //if(question !== null) {
        if(question === 'exit') {
            return false;
        }
        if(Number(question) === questions[nuberQuestion]['correctAnswer']) {
            console.log('Correct Answer!');            
            scorePlayer++;
        }
        showScorePlayer(scorePlayer);
        console.log('---------------------------------------------');
        showQuestion();
    //}
}

function showScorePlayer(scorePlayer) {
    console.log('Your current score is: ' +  scorePlayer);
}
showQuestion();