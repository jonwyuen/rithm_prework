Part 1

1) difference: this function takes in two parameters and returns the difference of the two

	function difference(a,b){
		return a - b;
	}

	difference(2,2); // 0
	difference(0,2); // -2

2) product: this function takes in two parameters and returns the product of the two

	function product(a,b){
		return a * b;
	}
	
	product(2,2); // 4
	product(0,2); // 0

3) printDay: this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined

	function printDay(num){
		var daysObj = {
			1: "Sunday",
			2: "Monday",
			3: "Tuesday",
			4: "Wednesday",
			5: "Thursday",
			6: "Friday",
			7: "Saturday"
		}
		return daysObj[num];
	}

	printDay(4); // "Wednesday"
	printDay(41); // undefined

4) lastElement: this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

	function lastElement(arr){
		return arr[arr.length - 1];
	}
	
	lastElement([1,2,3,4]); // 4
	lastElement([]); // undefined

5) numberCompare: this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

	function numberCompare(num1,num2){
		if(num1 > num2){
			return "First is greater";
		} else if(num2 > num1){
			return "Second is greater";
		}
		return "Numbers are equal";
	}
	
	numberCompare(1,1); // "Numbers are equal"
	numberCompare(2,1); // "First is greater"
	numberCompare(1,2); // "Second is greater"

6) singleLetterCount: this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

	function singleLetterCount(word,letter){
		var lowerCasedLetter = letter.toLowerCase();
		var lowerCasedWord = word.toLowerCase();
		var count = 0;
		for(var i = 0; i < lowerCasedWord.length; i++){
			if(lowerCasedWord[i] === lowerCasedLetter){
				count++;
			}
		}
		return count;
	}
	
	singleLetterCount('amazing','A'); // 2
	singleLetterCount('Rithm School','o'); // 2

Part 2

1) multipleLetterCount: this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

	function multipleLetterCount(str){
		var obj = {};
		for(var i = 0; i < str.length; i++){
			if(str[i] in obj){
				obj[str[i]]++;
			} else{
				obj[str[i]] = 1;
			}
		}
		return obj;
	}
	
	multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
	multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

2) arrayManipulation: this function should take in at most four parameters (an array, command, location, and value). If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.) If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.) If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array. If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

	function arrayManipulation(arr, command, location, value) {
	  if(command === "remove"){
	    if(location === "end"){
	      return arr.pop();
	    } 
	    return arr.shift(); 
	  } else if(command === "add"){
	    if(location === "beginning"){
	      arr.unshift(value);
	      return arr;
	    } 
	    arr.push(value);
	    return arr;
	  }
	}
	
	arrayManipulation([1,2,3], "remove", "end"); // 3
	arrayManipulation([1,2,3], "remove", "beginning"); // 1
	arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
	arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

3) isPalindrome: A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

	function isPalindrome(str){
	  var arr = str.split("");
	  for(var i = 0; i < arr.length; i++){
	    if(arr[i] === " "){
	      arr.splice(i, 1);
	    }
	  }
	  var newString = arr.join("");
	  for(var j = 0; j < newString.length/2; j++){
	    if(newString[j].toLowerCase() !== newString[newString.length-1-j].toLowerCase()){
	      return false;
	    }
	  }
	  return true;
	}
	
	isPalindrome('testing'); // false
	isPalindrome('tacocat'); // true
	isPalindrome('hannah'); // true
	isPalindrome('robert'); // false
	isPalindrome('a man a plan a canal Panama'); // true

Part 3

1) Rock/Paper/Scissor: using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

	function RPS(){
	  var userChoice = prompt("Choose rock, paper, or scissor").toLowerCase();
	  var answers = ["rock", "paper", "scissor"];
	
	  if(!userChoice || answers.indexOf(userChoice) === -1){
	    return "Please select a valid option";
	  }
	
	  var computerChoice = Math.random();
	  if (computerChoice <= (1/3)){
	    computerChoice = "rock";
	  } else if(computerChoice <= (2/3)){
	    computerChoice = "paper";
	  } else{
	    computerChoice = "scissor";
	  }
	
	  if(userChoice === computerChoice){
	    return "Tie! Both picked " + computerChoice + ".";
	  }
	  if(userChoice === "rock" && computerChoice === "paper"){
	    return "You lose, computer picked " + computerChoice + ".";
	  }
	  if(userChoice === "paper" && computerChoice === "scissor"){
	    return "You lose, computer picked " + computerChoice + ".";
	  }
	  if(userChoice === "scissor" && computerChoice === "rock"){
	    return "You lose, computer picked " + computerChoice + ".";
	  }
	  return "You win! Computer picked " + computerChoice + ".";
	}