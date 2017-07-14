//Part I

//1
window.onload = function(){
	//2
	var h1 = document.getElementById("change_heading");
	h1.innerText = "Hello World!";

	//3
	var section = document.querySelector("section");
	section.addEventListener("mouseover", function(event){
		var selected = document.querySelector(".selected");
		selected.innerText = event.target.className;
	})

	//4
	var newDiv = document.createElement("div");

	//5
	newDiv.classList.add("purple");
	newDiv.style.backgroundColor = "purple";

	//6
	section.appendChild(newDiv);

//Part II
	var button = document.querySelector("button");
	var car1 = document.querySelector(".car1");
	var car2 = document.querySelector(".car2");
	car1.style.marginLeft = 0;
	car2.style.marginLeft = 0;
	

	function reset(){
		clearInterval(car1.timer);
		clearInterval(car2.timer);
		car1.style.marginLeft = 0;
		car2.style.marginLeft = 0;
		button.disabled = false;
	}

	button.addEventListener("click", function(event){
		button.disabled = true;
		car1.timer = setInterval(function(){
			var random = Math.random() * 100;
			car1.style.marginLeft = parseInt(car1.style.marginLeft) + random + "px";
			if(parseInt(car1.style.marginLeft) > window.innerWidth){
				alert("Car 1 is the winner!");
				reset();
			}
		},100)
		car2.timer = setInterval(function(){
			var random = Math.random() * 100;
			car2.style.marginLeft = parseInt(car2.style.marginLeft) + random + "px";
			if(parseInt(car2.style.marginLeft) > window.innerWidth){
				alert("Car 2 is the winner!");
				reset();
			}
		},100)
	})
}
