window.onload = function() {
	var todoForm = document.querySelector("#todoForm");
	var addTodo = document.querySelector("#addTodo");
	var todoList = document.querySelector("#todoList");
	var todoInput = document.querySelector("#todoInput");

	//getting the stored todos from localStorage to display
	var storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
	for(var i = 0; i < storedTodos.length; i++){
	    var newTodo = document.createElement("li");
	    newTodo.innerText = storedTodos[i].todo;
	    todoList.appendChild(newTodo);
	    if(storedTodos[i].completed){
	    	newTodo.completed = true;
	    } else {
	    	newTodo.completed = false;
	    }
	    if(newTodo.completed) {
	        newTodo.style.textDecoration = "line-through";
	    }
	    removeButton(newTodo);
	}

	addTodo.addEventListener("click", function(event){
		//stops page from reloading
		event.preventDefault();

		//if user input is "", do not add as new todo
		if(todoInput.value !== "") {
			//create new todo
			var newTodo = document.createElement("li");
			newTodo.innerText = todoInput.value;
			todoList.append(newTodo);
			removeButton(newTodo);
			//reset the input value after a new todo is created
			todoInput.value = "";
			//save todos to localStorage
			storedTodos.push({
				todo: newTodo.innerText, 
				completed: false
			});
			localStorage.setItem("todos", JSON.stringify(storedTodos));
		}
	});

	todoList.addEventListener("click", function(event){
		var clickedItem = event.target;
		//puts a line-through the todo if that todo's completed property is false, then set it to true
		if(!clickedItem.completed) {
		    clickedItem.style.textDecoration = "line-through";
		    clickedItem.completed = true;
		//if that todo's completed property is true, remove the line-through, and set it to false
		} else {
		    clickedItem.style.textDecoration = "none";
		    clickedItem.completed = false;
		}
		//save the line-through in localStorage
		for(var i = 0; i < storedTodos.length; i++){
		    if(storedTodos[i].todo === clickedItem.innerText){
		        storedTodos[i].completed = clickedItem.completed;
		        localStorage.setItem("todos", JSON.stringify(storedTodos));
		    }
		}

		//remove todo if remove button is clicked
		if(clickedItem.tagName.toLowerCase() === "span"){
			clickedItem.parentNode.remove();
			//remove the todo from localStorage
			for(var i = 0; i < storedTodos.length; i++){
				if(storedTodos[i].todo === clickedItem.parentNode.innerText){
					storedTodos.splice(i, 1);
					localStorage.setItem("todos", JSON.stringify(storedTodos));
				}
			}
		}
	});

	//removes all todos and clears localStorage
	removeAll.addEventListener("click", function(){
		var todos = document.querySelectorAll("li");
		for(var i = 0; i < todos.length; i++){
			todos[i].remove();
		}
		localStorage.clear();
	});

	//create the remove button for each todo
	function removeButton(newTodo){
		var remove = document.createElement("span");
		remove.classList.add("glyphicon","glyphicon-remove","text-danger","pull-right");
		newTodo.append(remove);
	}
}

