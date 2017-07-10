Part I

1) 2 == "2"

	true

2) 2 === 2

	true

3) 10 % 3

	1

4) 10 % 3 === 1

	true

5) true && false

	false

6) false || true

	true

7) true || false

	true

Part II

	var isLearning = true;
	if(isLearning){
	    console.log("Keep it up!");
	} else {
	    console.log("Pretty sure you are learning....");
	}

1) "Keep it up!"

2) We don't need to specify if(isLearning === true) because inside an if statement, the value is forced into a boolean. if(isLearning) works on its own because isLearning is a truthy statement.


	var firstVariable;
	var secondVariable = "";
	var thirdVariable = 1;
	var secretMessage = "Shh!";
		
	if(firstVariable){
		 console.log("first");
	} else if(firstVariable || secondVariable){
		 console.log("second");
	} else if(firstVariable || thirdVariable){
		 console.log("third");
	} else {
		 console.log("fourth");
	}

1) The code console.logs "third" because firstVariable is undefined, which is a falsey value, and secondVariable is an empty string, which is a falsey value as well. thirdVariable equals 1, and 1 is a truthy value.

2) The value of firstVariable is undefined when it is first initialized.

3) The value of firstVariable is not truthy value because undefined is a falsey value.

4) The value of secondVariable is not truthy value because an empty string is a falsey value.

5) The value of thirdVariable is a truthy value because 1 is a truthy value.


Part III

1)

	if(Math.random() > 0.5){
		console.log("Over 0.5");
	} else{
		console.log("Under 0.5");
	}

2) A falsey value is a value that is evaluated to false when inside of a conditional statement. The falsey values in JavaScript are 0, "", false, undefined, null, and NaN.

