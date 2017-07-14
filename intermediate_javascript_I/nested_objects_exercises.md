```javascript
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
```

1. Using a for loop, console.log all of the numbers in the primeNumbers array.
		
	```javascript
	var primeNumbersArray = nestedData.innerData.numberData.primeNumbers;
			
	for(var i=0; i<primeNumbersArray.length; i++){
		console.log(primeNumbersArray[i]);
	}
	```

2. Using a for loop, console.log all of the even Fibonnaci numbers.

	```javascript		
	var fibArray = nestedData.innerData.numberData.fibonnaci;
			
	for(var i=0; i<fibArray.length; i++){
		if(fibArray[i] % 2 === 0){
			console.log(fib[i]);
		}
	}
	```

3. Console.log the value "second" inside the order array.

	```javascript
	var orderArray = nestedData.innerData.order;
	console.log(orderArray[1]);
	```

4. Invoke the addSnack function and add the snack "chocolate".
	
	```javascript
	nestedData.innerData.addSnack("Chocolate");
	```

5. Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

	* The keyword this inside of the addSnack function refers to the innerData object.

<br>	
  
```javascript
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
```

1. Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

	```javascript
	function addSpeaker(speakerName){
		nestedObject.speakers.push({
			name: speakerName
		})
	}
	```

2. Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
	
	```javascript
	function addLanguage(language, helloInLanguage){
		nestedObject.data.languages[language] = {
			hello: helloInLanguage
		}
	}
	```

3. Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

	```javascript
	function addCountry(name, capital, population){
		nestedObject.data.continents.europe.countries[name] = {
			captial: capital,
			population: population
		}
	}
	```
