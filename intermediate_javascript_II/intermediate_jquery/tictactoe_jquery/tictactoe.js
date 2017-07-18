$(function(){
	var $turn;
	var $gameOver;
	var $tieGame;
	var $table = $("table");
	var $box = $("td");
	var $newGame = $("#newGame");

	$table.on("click", function(e){
		//prevents further moves if a player has won
		if($gameOver){
			displayMessage("Congratulations, Player " + $turn + " wins!");	
		} else if($(e.target).text() === ""){
			$(e.target).text($turn);
			changePlayers();
		}
	})

	$newGame.on("click", function(){
		init();
	})

	//initializes the game
	function init(){
		$turn = "X";
		$gameOver = false;
		$tieGame = false;
		$newGame.css("background-color", "#E6E6E6");
		$box.each(function(i,el){
			$(el).text("");
			$(el).css("color", "black");
		});
		//randomly chooses who starts first
		if(Math.random() < 0.5){
			$turn = "O";
		};
		displayMessage("Player " + $turn + "'s turn");
	}

	//prevents player change if a player has won or a tie game
	function changePlayers(){
		if(checkForWinner($turn)){
			displayMessage("Congratulations, Player " + $turn + " wins!");
			$newGame.css("background-color", "#228B22");
		} else if(checkForTie()){
			displayMessage("Tie Game!");
		} else if($turn === "X"){
			$turn = "O";
			displayMessage("Player " + $turn + "'s turn");
		} else {
			$turn = "X";
			displayMessage("Player " + $turn + "'s turn");
		}
	}

	//tie when all boxes are filled and there is no winner
	function checkForTie(){
		var $turnCount = 0;
		$box.each(function(i,el){
			if($(el).text() !== ""){
				$turnCount++;
			}
		});
		if($turnCount >= 9 && !$gameOver){
			$tieGame = true;
		}
		return $tieGame;
	}

	//player wins when one of the eight conditions is satisfied
	function checkForWinner(player){
		if(checkRow("1", "2", "3", player) || 
		checkRow("4", "5", "6", player) || 
		checkRow("7", "8", "9", player) || 
		checkRow("1", "4", "7", player) || 
		checkRow("2", "5", "8", player) || 
		checkRow("3", "6", "9", player) || 
		checkRow("1", "5", "9", player) || 
		checkRow("3", "5", "7", player)){
			$gameOver = true;
		}
		return $gameOver;
	}

	//checks if the text of the three boxes selected matches the specific player
	function checkRow(box1, box2, box3, player){
		if(selectBox(box1) === player && selectBox(box2) === player && selectBox(box3) === player){
			$gameOver = true;
		}
		if($gameOver){
			winColor(box1);
			winColor(box2);
			winColor(box3);
		}
		return $gameOver;
	}

	//displays the message that is passed into the function
	function displayMessage(message){
		return $("#message").text(message);
	}

	//selects the text for a given box
	function selectBox(box){
		return $("#"+box).text();
	}

	//changes text color of winning boxes to green
	function winColor(box){
		return $("#"+box).css("color", "#228B22");
	}

	init();
})