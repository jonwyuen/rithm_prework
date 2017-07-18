### Part I

```javascript
var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]
```

1. Write a function called printEmails which console.log's each email for the users.

	```javascript
	function printEmails(){
	  users.forEach(function(user){
	    console.log(user.email);
	  });
	}
	```

2. Write a function called printHobbies which console.log's each hobby for each user.

	```javascript
	function printHobbies(){
	  users.forEach(function(user){
	    user.hobbies.forEach(function(hobby){
	      console.log(hobby);
	    });
	  });
	}
	```

3. Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

	```javascript
	function findHometownByState(state){
	  return users.find(function(user){
	    return user.hometown.state === state;
	  });
	}
	```
4. Write a function called allLanguages which returns an array of all of the unique values

	```javascript
	function allLanguages(){
	  var languages = [];
	  users.forEach(function(user){
	    user.favoriteLanguages.forEach(function(language){
	      if(languages.indexOf(language) === -1){
	        languages.push(language);
	      }
	    });
	  });
	  return languages;
	}
	```

5. Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

	```javascript
	function hasFavoriteEditor(editor){
	  return users.some(function(user){
	    return user.favoriteEditor === editor;
	  });
	}
	```

6. Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
	
	```javascript
	function findByUsername(username){
	  return users.find(function(user){
	    return user.username === username;
	  });
	}
	```

### Part II


1. Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

	```javascript
	function vowelCount(str){
	  var obj = {};
	  var splitArr = str.split("");
	  var vowels = ["a", "e", "i", "o", "u"];
	  splitArr.forEach(function(letter){
	    if(vowels.indexOf(letter.toLowerCase()) !== -1){
	      if(obj[letter]){
	        obj[letter]++;
	      } else{
	        obj[letter] = 1;
	      }
	    }
	  });
	  return obj;
	}
	```

2. Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

	```javascript
	function removeVowels(str){
	  var splitArr = str.split("");
	  var vowels = ["a", "e", "i", "o", "u"];
	  return splitArr.filter(function(letter){
	    return vowels.indexOf(letter.toLowerCase()) === -1;  
	  });
	}
	```

### Part III

##### forEach

1. Write a function called listNames which takes in an array of songs and console.logs the name of each one.
	
	```javascript
	function listNames(arr){
	  arr.forEach(function(val){
	    console.log(val.name);
	  });
	}
	```

2. Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
	
	```javascript
	function listSongDetails(arr){
	  arr.forEach(function(val){
	    console.log(val.name + ", by " + val.artist + " (" + val.duration + ")");
	  });
	}
	```

3. Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

	```javascript
	function summerJamCount(arr){
	  var count = 0;
	  arr.forEach(function(val){
	    if(val.month >= 6 && val.month <= 8){
	      count++
	    }
	  });
	  return count;
	}
	```

##### map

1. Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

	```javascript
	function getDurations(arr){
	  return arr.map(function(val){
	    return val.duration;
	  });
	}
	```

2. Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

	```javascript
	function getDurationInSeconds(arr){
	  return arr.map(function(val){
	    var minutes = +val.duration.split(":")[0];
	    var seconds = +val.duration.split(":")[1];
	    return minutes*60 + seconds;
	  });
	}
	```

3. Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
	
	```javascript
	function getMainArtists(arr){
	    return arr.map(function(val){
	        return val.artist.split(" featuring")[0];
	    });
	}
	```

##### filter

1. Write a function called getBigHits which takes an array of songs and returns an array of song objects which were number one for 10 or more weeks.

	```javascript
	function getBigHits(arr){
	  return arr.filter(function(val){
	    return val.weeksAtNumberOne >= 10;
	  });
	}
	```

2. Write a function called getShortSongs which takes an array of songs and returns an array of songs which are shorter than 3 minutes.

	```javascript
	function getShortSongs(arr){
	  return arr.filter(function(val){
	    return val.duration.split(":")[0] < 3;
	  });
	}
	```

3. Write a function called getSongsByArtist which takes in an array of songs and the name of an artist and returns an array of songs by that artist.

	```javascript
	function getSongsByArtist(arr, artist){
	  return arr.filter(function(val){
	    return val.artist.split(" featuring")[0] === artist;
	  });
	}
	```

4. Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appear once in the original array.

	```javascript
	function getOneHitWonders(arr){
	  var artistsArr = arr.map(function(val){
	    return val.artist.split(" featuring")[0];
	  });
	  return arr.filter(function(val){
	    var artists = val.artist.split(" featuring")[0];
	    return artistsArr.indexOf(artists) === artistsArr.lastIndexOf(artists); 
	  });
	}
	```

##### reduce

1. Refactor summerJamCount to use reduce!

	```javascript
	function summerJamCount(arr){
	  return arr.reduce(function(acc,next){
	    if(next.month >= 6 && next.month <= 8){
	      acc++;
	    }
	    return acc;
	  },0);
	}
	```

2. Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

	```javascript
	function getTotalDurationInSeconds(arr){
	  return arr.reduce(function(acc,next){
	    var minutes = +next.duration.split(":")[0];
	    var seconds = +next.duration.split(":")[1];
	    acc += (minutes*60 + seconds);
	    return acc;
	  },0);
	}
	```
	
3. Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

	```javascript
	function getSongCountByArtist(arr){
	  return arr.reduce(function(acc,next){
	    var artist = next.artist.split(" featuring")[0];
	    if(artist in acc){
	      acc[artist]++;
	    } else{
	      acc[artist] = 1;
	    }
	    return acc;
	  },{});
	}
	```

4. Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

	```javascript
	function averageWeeksAtNumberOne(arr){
	  return arr.reduce(function(acc, next){
	    acc += next.weeksAtNumberOne;
	    return acc;
	  },0)/arr.length;
	}
	```

