/*
1) Create a JavaScript application that asks the user what their name is. If they answer 'Fred' feedback
to the user telling tell them you like their name. (slides 5-7)
*/


//const nametest=prompt("What is your name?");
//
//if(nametest=="Amrit Evian Kaur Dhesi")
//    {
//        console.log("Meh, you should consider changing your name");
//    }
//else {
//    console.log(`${nametest}!, Thank god you're not named after a bottled of water..`);
//}


/*
2) Create a JavaScript application that asks the user for 2 numbers and feeds back to the user with the
highest of the two numbers.(slides 5-7)
*/

//const number1=parseInt(prompt("Please input your first number?"));
//const number2=parseInt(prompt("Please input your second number?"));
//
//if (number1>number2){
//    console.log(`${number1}, this is the largest number!`);
//}
//else {
//    console.log(`${number2}, this is the largest number!`);
//}


/*
3) Create a JavaScript application that asks the user for their age. If the user is older than 4 and
younger than 16 feedback to the user telling them they should be at school. (slides 11-16)
*/

//const ageguess=parseInt(prompt("Please enter your age."));
//
//if (ageguess<=4 || ageguess>=16){
//    console.log("You arent meant to be in school, dont worry!");}
//
//else if (ageguess>=4 || ageguess<=16){
//        console.log("stay in school!");
//    }


/*
4) Create a JavaScript program that asks the user for the name of the Prime Minister. If the user
responds with 'Boris', 'Boris Johnson' or 'Johnson' the program should feedback telling them they
are correct. (slides 11-16)
*/

//let pm=prompt("What is the name of the prime minister?");
//pm = pm.toLowerCase();
//if (pm==="boris" || pm==="johnson" || pm==="boris johnson"){
//    console.log("You are correct!");}
//else {
//        console.log(`${pm}, is not correct.`);
//    }
//


/*
5) Question 4 asks the user for the name of the Prime Minister. It is possible that the user will enter the
answer in lower case e.g. 'boris'. Again do some research do find out how the case of string
data can be converted from upper to lower case - 
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Modify your answer to question 4 to make the program more robust.
 */

//Answered above!

/*
6) Create a JavaScript program that asks the user for three numbers and feeds back to the user with
the lowest.(slides 11-16)
*/

//const num1=prompt("Please enter your first number.");
//const num2=prompt("Please enter your second number.");
//const num3=prompt("Please enter your third number.");
//
//if (num1<=num2 && num1<=num3) {
//    console.log(`${num1}, this is the lowest number.`)
//} 
//else {
//        console.log(`${num1}, is not the lowest number.`);
//    }
//
//if (num2<=num1 && num2<=num3) {
//    console.log(`${num2}, this is the lowest number.`)
//} 
//else {
//        console.log(`${num2}, is not the lowest number.`);
//    }
//if (num3<=num2 && num3<=num1) {
//    console.log(`${num3}, this is the lowest number.`)
//} 
//else {
//        console.log(`${num3}, is not the lowest number.`);
//    }
/*
7) Create a simple JavaScript quiz. This program has been started for you, see below. Add javaScript 
that will test the user's answers,calculate a score for the user, and feedback to the user.
*/

//let score=0;
//let q1=prompt("What is the capital of England");
//let q2=prompt("What is the capital of France");
//let q3=prompt("What is the capital of Germany");
//
//q1=q1.toLowerCase();
//q2=q2.toLowerCase();
//q3=q3.toLowerCase();
//
//if (q1==="london"){
//    score++;
//}
//
//if (q2==="paris"){
//    score++;
//}
//
//if (q3==="berlin"){
//    score++
//    console.log(`${score}, well done, this is your score.`)
//}


/*
8) Factory owners SlaveDrivers Inc. pay their workers a basic wage of £2.40 an hour. If an employee
works over 40 hours a week they receive £3.60 an hour for every hour of overtime they work. Workers
can work a maximum of 80 hours a week. Write a JavaScript application that allows workers to enter
the number of hours they have worked. The program should then feedback to the user telling them their
wages for the week.
*/

//basic wage = 2.40
//overtime wage = 3.60
//
//overtime hours = 40 + hours per week
//max hours per week = 80 hours

//let inputhours=prompt("Please enter your total hours.")
//
//const basic=5.50;
//const over=8.50;
//const maxover=80;
//const minover=40;
//
//let maxcheck=0;
//
//let undertime;
//let overtime;
//
//
//if (inputhours>maxover){
//    console.log(`Unfortunately you cannot work more than ${maxover} hours a week.`)
//}
//
//if (inputhours<=maxover) {
//    maxcheck=1;
//    console.log(`You have worked ${inputhours} hours this week.`)
//}
//
//if (maxcheck==1 && inputhours<=minover) {
//    undertime = inputhours*basic;
//    console.log("Your wages are as follows:")
//	console.log(`£${undertime} Gross`)
//	console.log(`${inputhours} x £5.50 - £${undertime}`)
//	
//	var taxadd
//	var taxdiv
//	var taxmul
//	var tax
//	taxadd = undertime;
//	taxdiv = taxadd/100;
//	taxmul = taxdiv*20;
//	tax = taxadd-taxmul;
//	
//	var taxpaid = taxmul.toFixed(2);
//	var net = tax.toFixed(2);
//	
//	console.log(`-£${taxpaid} tax`)
//	console.log(`Total net income £${net}`)
//}
//
//if (maxcheck==1 && inputhours>minover && inputhours<=maxover){
//	undertime = inputhours*basic;
//	overtime = inputhours-minover;
//	overtime = overtime*over;
//	
//	console.log("Your wages are as follows:")
//	console.log(`£${undertime+overtime} Gross`)
//	console.log(`${inputhours} x £5.50 - £${undertime}`)
//	console.log(`${inputhours-minover} x £8.50 - £${overtime}`)
//	
//	var taxadd
//	var taxdiv
//	var taxmul
//	var tax
//	taxadd = overtime+undertime;
//	taxdiv = taxadd/100;
//	taxmul = taxdiv*20;
//	tax = taxadd-taxmul;
//	
//	var taxpaid = taxmul.toFixed(2);
//	var net = tax.toFixed(2);
//	
//	console.log(`-£${taxpaid} tax.`)
//	console.log(`Total net income £${net}.`) 
//}

/*
9) Look at the following for loop. Uncomment the code. Modify the loop so that it
a) Output the numbers 0 to 50
b) Outputs the numbers 50 to 100
c) Re-write the loop as a while loop
*/


//for(let i=1;i<=50;i++)
//{
//    console.log(i);
//}

//for(let i=50;i<=100;i++)
//{
//    console.log(i);
//}

//for(let i=50;i<=100;i++)
//{
//    console.log(i);
//}


//let counter=0;
//
//while (counter<=100) {
//	console.log(counter);
//	counter++;
//}
//
//if (counter=50){
//	console.log("this is a test statement");
//}

/*
10) Write a JavaScript program that asks the user for their name and then for a number. The
program should output the user's name repeatedly. e.g. If the user enters 4 for the number
their name should be printed 4 times. If they enter 6, the name should be printed 6 times
*/

//const inputname=prompt("Please enter your name.")
//const inputnum=prompt("Please enter a number.")
//
////let counter=0;
////
////while (counter<inputnum){
////	console.log("inputname")
////	counter++;
////}
//
//for(let counter=0;counter<=inputnum;counter++)
//{
//    console.log(inputname);
//}


/*
11) Write a JavaScript program that asks the user for a number and then uses a for loop to
output the times table for that number. Here is some code to get you started:
*/

//const userNum=prompt("Tell me a number");
//
//let i=0;
//
//while (i<=12) 
//{
//    var output;
//	output = userNum*i;
//	console.log(`${userNum}x${i} = ${output}`)
//	i++;
//}


/*
12) Uncomment the following program. It is a simple quiz. The user gets three guesses. 
a)Can you re-write this program using a for loop so that the code is more efficient and easier to maintain?
b) One problem is that if the user answer correctly on the first attempt they are still asked two more times. Do some research into the 'break' statement e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
*/


//if(userGuess===1){
//    alert("You are correct");
//}else if(userGuess<1){
//    alert("Too low");
//}else if(userGuess>1){
//    alert("Too high");
//}

//let userGuess;
//let guessnum=2;
//
//alert("You have 3 chances to answer this question correctly.");
//
//	userGuess=parseInt(prompt("I thought of a number, the number is between 1-5, what is it?"));
//
//
//while (userGuess<1 || userGuess>1 && guessnum>0){
//	alert("Incorrect, Please try again!");
//	alert(`You have ${guessnum} guesses left!`);
//	guessnum--;
//	userGuess=parseInt(prompt("I thought of a number, the number is between 1-5, what is it?"));	
//	if (guessnum===0){
//		alert("You have ran out of guesses!")
//	}
//}
//
//while (userGuess===1){
//	alert("Correct, well done!");
//	userGuess=0;
//}

/*
13) Uncomment the following program. It is an example from the lecture. 
a) Modify the program so that every time the user guesses, the program tells the user if their guess is too high or too low. 
b)If you can get this to work it makes the game too easy. Modify the program so that a
random number between 1 and 100 is generated (instead of 1 to 10).
*/


//const ranNum=Math.floor(Math.random()*100+1);
//
//let correct=false;
//
//let count=0;
//
//let msg;
//while(correct===false)
//{
//    count++;
//    let userGuess=parseInt(prompt("Guess the random number"));
//    if(userGuess===ranNum)
//    {
//        correct=true;
//	} else if (userGuess<ranNum){
//		alert(`${userGuess} is too low, try agan!`);
//	} else if (userGuess>ranNum) {
//		alert(`${userGuess} is too high, try again!`);
//	}
//	
//}
//
//
//
//msg=`You guessed the random number is ${ranNum} it took you ${count}`;
//if(count===1){
//    msg=msg+" guess"
//}else{
//    msg=msg+" guesses"
//}
//console.log(msg)


/*
14) Write a program that asks the user for a colour and then changes the background
colour of the page to the colour the user enters. The program should repeat this process
until the user doesn't enter a colour i.e. the input will be equal to an empty string "". You will need to use a while loop.
*/


//let userinput=prompt("Please choose your background colour, you can choose between red, blue, or green.");
//
//while (userinput==""){
//	userinput=prompt("Please choose your background colour, you can choose between red, blue, or green.");
//}
//
//if (userinput=="red"){
//	userinput="";
//	document.body.style.backgroundColor = "red";
//	
//}
//if (userinput=="green"){
//	document.body.style.backgroundColor = "green";
//	userinput="";
//}

const brand = document.getElementById('brand').value
const mins = document.getElementById('minutes').value
const texts = document.getElementById('text').value
const costmin = document.getElementById('valuecostmin').Value

function userinput {
	alert("Hello!");
	return true;
}


	
	
	
	
	
	
	

