        // <========  Assignment no 21 to 25  =======>

// Question no 1

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// fullName = firstName + " " + lastName;
// document.write("Hello " + fullName);

// Question no 2

// var favoriteMobile = prompt("Enter your favorite mobile phone"); 
// document.write(` My favorite phone is : ${favoriteMobile} <br> 
// Length of string : ${favoriteMobile.length}`);

// Question no 3

// var word = "Pakistani";
// document.write(`String : ${word} <br> Index of 'n' : ${word.indexOf("n")}`);

// Question no 4

// var word = "Hello World";
// document.write(`String : ${word} <br> Last index of 'l' : ${word.lastIndexOf("l")}`);

// Question no 5

// var word = "Pakistani";
// document.write(`String : ${word} <br> Character at index 3 : ${word.charAt(3)}`);

// Question no 6

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// fullName = firstName.concat(" " + lastName);
// document.write("Hello " + fullName);

// Question no 7
//Method 1
// var word = "Hyderabad";
// var newWord = word.replace("Hyder","Islam");
// document.write(`City :${word} <br> After replacement : ${newWord}`);

// Method 2
// var word = "Hyderabad";
// var newWord ="Islam" + word.slice(5);
// document.write(`City :${word} <br> After replacement : ${newWord}`);


// Question no 8

// method 1
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var newMessage = message.replace(/and/g,"&");
// document.write(newMessage);

//method 2  
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var newMessage = message.replaceAll("and","&");
// document.write(newMessage);


// Question no 9

// var str = "472";
// var num = parseInt(str);
// document.write(`Value : ${str} <br> Type :${typeof(str)} <br> Value : ${num} <br> Type :${typeof(num)}`);


// Question no 10

// var word = prompt("Enter your word");
// var newWord = word.toUpperCase();
// document.write(`User input : ${word} <br> Upper case : ${newWord}`);


// Question no 11

// var userInput = prompt("Enter you word");
// var titleCase = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(`User input : ${userInput} <br> Title case : ${titleCase}`);


// Question no 12

// var num = 35.36;
// var str = num.toString();
// document.write(`Number : ${num} <br> Result: ${str.replace(".","")}`);


// Question no 13

// Note:
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64 

//method 1
// var userName = prompt("Enter your user name");
// for(var i = 0; i < userName.length; i++){
//     if(userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64){
//      alert("Please enter a valid user name");
//      var userName = prompt("Enter your user name");
// }
// }
// alert("Username successfully stored");

// // method 2
// var userName = prompt("Enter your username");

// if(userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){
//    alert("Please enter a valid username");
//    userName = prompt("Enter your username");
// }
// alert("Username stored successfully ");

// Question no 16

// var university = "University of Karachi";
// var universityArray = university.split("");
// document.write(universityArray.join("<br>"));

// Question no 17

// var userInput = prompt("Enter your word");
// var result = userInput[userInput.length-1];
// document.write(`User input : ${userInput} <br> Last character of input : ${result}`);


// <================Assignment  26 to 30 ================>

//Question no 1 and  Question no 2 same but 1 is positive & 2 is negative method 

// var userInput = prompt("Enter your positive integer");

// var roundNum = Math.round(userInput);

// var floorValue = Math.floor(userInput);

// var ceilValue = Math.ceil(userInput);

// document.write(`number: ${userInput} <br> round off value: ${roundNum} <br> 
// floor value: ${floorValue} <br> ceil value: ${ceilValue}`);


// Question no 3

// var num = prompt("Enter your number");
// var result = Math.abs(num);
// document.write(`The absolute value of ${num} is ${result}`);


// Question no 4

// var randomNum = Math.floor(Math.random() * 6) + 1;

// document.write(`random dice value : ${randomNum}`);


// Question no 5

// var toss = Math.floor(Math.random() * 2) + 1;

// if(toss == 2){
//   document.write(` ${toss} <br> random coin value : Heads`);
// }
// else
// {
//   document.write(`${toss} <br> random coin value : Tails `); 
// }


// Question no 6

// var randomNum = Math.floor(Math.random() * 100) + 1;

// document.write(`random number between 1 and 100 : ${randomNum}`);


// Question no 8

// var secretNum = Math.floor(Math.random() * 10) + 1;
// var userNum = parseInt(prompt("Enter a number between 1 and 10"));
// if(userNum === secretNum){
//   alert("Congragulation! You guessed the secret number");
// }
// else{
//   alert("Try again");
// }







