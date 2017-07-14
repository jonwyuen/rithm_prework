###Part I

1. The keyword throw allows you to return an error/exception of your choice.

2. The keyword finally allows you to execute some code regardless of an error being thrown.

3. TypeError is an error that occurs when JavaScript is unable to perform a certain operation on a data type. Examples of a TypeError are trying to invoke something that isn't a function and trying to access properties on something that isn't an object. ReferenceError is an error that occurs when JavaScript doesn't have a reference to the variable in memory. An example of a ReferenceError is trying to access a variable that is not defined or not in current or outer scope.

4. To create a snippet in the chrome dev tools, you need to open chrome, inspect a page on chrome, go to the sources tab, click on snippets which is located on the left panel, and then click on the "+ New Snippet" button.

5. An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block.

6. We catch errors in JavaScript by using a try/catch block.
	
	```javascript
	try{
	  obj.name;
	} catch(e){
	  console.log("We have an error, the error is " + e);
	}
	```
		
<br>
  
1.

```javascript
person;
```

The type of error is ReferenceError because we are trying to access a variable that is not defined.

2.

```javascript
var data = {};
data.displayInfo();
```

The type of error is TypeError because we are trying to invoke data.displayInfo, which is undefined. We cannot do that because undefined is not a function.

3.

```javascript
var data = {};
data.displayInfo.foo = "bar";
```
	
The type of error is TypeError because we are trying to assign a property of "foo" to data.displayInfo, which is undefined. We cannot do that because undefined is not an object.

4.

```javascript
function data(){
    var thing = "foo";
}
data();
thing;
```
	
The type of error is ReferenceError because we are trying to access a variable outside of the scope of the function data. The variable "thing" is only available in the scope of the function data.

###Part II

1.

```javascript
for(var i=0; i > 5; i++){
    console.log(i);
}
```

Fix
	
```javascript
for(var i=0; i < 5; i++){
    console.log(i);
}
```
	
The condition inside the for loop needs to be i < 5 in order for the loop to run.

2.

```javascript
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
```

Fix

```javascript
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}
```
	
Inside the if statement, we needed to use the comparison operator === instead of the assignment operator =.

3.

```javascript
function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}
```

Fix

```javascript
function loopToFive(){
    for(var i=0; i < 5; i++){
        console.log(i);
    }
}
```
	
The syntax inside the for loop requires semicolons to separate each section instead of commas.

4.

```javascript
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
	
displayEvenNumbers(); // should return [2,4,6,8] 
```

Fix

```javascript
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
	return evenNumbers;
}
```

The for loop should not have a semicolon after i++. The if statement should not have a semicolon after the condition. The condition of the for loop should be either i<numbers.length or i<=numbers.length-1. Inside of the if statement, we need to use the comparison operator === instead of the assignment operator =. The condition of the if statement needs to check for each number in the numbers array, which is numbers[i]. The evenNumbers array needs to push in the value that satisfies the condition, which is numbers[i], not the index i. The evenNumbers array needs to be returned outside of the for loop.