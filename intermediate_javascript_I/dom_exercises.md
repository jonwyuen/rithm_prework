```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
```
	
1. Select the section with an id of container without using querySelector.
	
	```javascript	
	document.getElementById("container");
	```

2. Select the section with an id of container using querySelector.
	
	```javascript
	document.querySelector("#container");
	```
	
3. Select all of the list items with a class of "second".
	
	```javascript
	document.getElementsByClassName("second");
	```

4. Select a list item with a class of third, but only the list item inside of the ol tag.
	
	```javascript
	document.querySelector("ol .third");
	```

5. Give the section with an id of container the text "Hello!".

	```javascript
	var container = document.getElementById("container");
	container.innerText = "Hello!";
	```

6. Add the class main to the div with a class of footer.
	
	```javascript
	var footer = document.querySelector(".footer");
	footer.classList.add("main");
	```
	
7. Remove the class main on the div with a class of footer.
	
	```javascript
	var footer = document.querySelector(".footer");
	footer.classList.remove("main");
	```
	
8. Create a new li element.
	
	```javascript
	var newLi = document.createElement("li");
	```

9. Give the li the text "four".

	```javascript
	newLi.innerText = "four";
	```

10. Append the li to the ul element.
	
	```javascript
	var list = document.querySelector("ul");
	list.appendChild(newLi);
	```
	
11. Loop over all of the lis inside the ol tag and give them a background color of "green".
	
	```javascript
	var lisInsideOl = document.querySelectorAll("ol li");
	for(var i = 0; i < lisInsideOl.length; i++) {
		lisInsideOl[i].style.backgroundColor = "green";	}
	```	

12. Remove the div with a class of footer.
	
	```javascript	
	var footer = document.querySelector(".footer");
	footer.remove();
	```

	