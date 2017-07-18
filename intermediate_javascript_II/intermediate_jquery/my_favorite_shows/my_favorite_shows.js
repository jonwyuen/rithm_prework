$(function(){

	var $show = $("#show");
	var $rating = $("#rating");
	var $submitButton = $("button");
	var $tBody = $("tbody");
	var $form = $("form");
	var $removeAll = $("#removeAll");
	var $showAscending = $("#showAscending");
	var $showDescending = $("#showDescending");
	var $ratingAscending = $("#ratingAscending");
	var $ratingDescending = $("#ratingDescending");
	var $storedData = JSON.parse(localStorage.getItem("storedData")) || [];
	
	// create the rows with stored data when page reloads
	$($storedData).each(function(i,el){
		createRow(el.show, el.rating);
	});

	$submitButton.on("click", function(e){
		e.preventDefault();
		createRow($show.val(), $rating.val());
		if($show.val() !== "" && $rating.val() !== ""){
			$storedData.push({
				show: $show.val(), 
				rating: $rating.val()
			});
			localStorage.setItem("storedData", JSON.stringify($storedData));
			// reset form after data is stored in localStorage
			$form.trigger("reset");
		}
	});

	$tBody.on("click", "button", function(e){
		$(e.target).closest("tr").remove();
		$($storedData).each(function(i,el){
			if(el.show === $(e.target).parent().siblings().eq(0).text()){
				$storedData.splice(i, 1);
				localStorage.setItem("storedData", JSON.stringify($storedData));
			}
		});
	});

	$removeAll.on("click", function(e){
		removeRows();
		localStorage.clear();
	});

	$showAscending.on("click", function(e){
		sortData("show", "ascending");
		updateSortedRows();
	});

	$showDescending.on("click", function(e){
		sortData("show", "descending");
		updateSortedRows();
	});

	$ratingAscending.on("click", function(e){
		sortData("rating", "ascending");
		updateSortedRows();
	});

	$ratingDescending.on("click", function(e){
		sortData("rating", "descending");
		updateSortedRows();
	});

	function createRow(show, rating){
		var $newRow = $("<tr>", {
			addClass: "newRow"
		});
		var $newShow = $("<td>", {
			text: show,
			addClass: "col-xs-8 text-center",
			css: {
				"font-size": "18px",
				"vertical-align": "middle"
			}
		});
		var $newRating = $("<td>", {
			text: rating,
			addClass: "col-xs-2 text-center",
			css: {
				"font-size": "18px",
				"vertical-align": "middle"
			}
		});
		var $deleteButton = $("<button>", {
			text: "Delete",
			addClass: "btn btn-danger"
		});
		var $deleteButtonCol = $("<td>", {
			addClass: "col-xs-2 text-center"
		});
		// only add if both show and rating are not left blank
		if(show !== "" && rating !== ""){
			$deleteButtonCol.append($deleteButton);
			$newRow.append($newShow).append($newRating).append($deleteButtonCol);
			$tBody.append($newRow);
		}
	}

	function sortData(data, direction){
		$storedData.sort(function(a,b){
			// ignore upper and lowercase
			var $showA = a.show.toUpperCase()
			var $showB = b.show.toUpperCase();
			if(data === "show"){
				if(direction === "ascending"){
					return ($showA > $showB) ? 1 : ($showB > $showA) ? -1 : 0;
				}
				if(direction === "descending"){
					return ($showB > $showA) ? 1 : ($showA > $showB) ? -1 : 0;
				}
			}
			if(data === "rating"){
				if(direction === "ascending"){
					return a.rating - b.rating;
				}
				if(direction === "descending"){
					return b.rating - a.rating;
				}
			}
		});
	}

	//update localStorage with sorted data; empty first two td's of each row and update them with the sorted data
	function updateSortedRows(){
		var $allRows = $(".newRow");
		localStorage.setItem("storedData", JSON.stringify($storedData));
		$allRows.each(function(i,el){
			$(el).children().slice(0,2).empty();
			$(el).children().eq(0).text($storedData[i].show);
		 	$(el).children().eq(1).text($storedData[i].rating);
		});
	}

	function removeRows(){
		var $allRows = $(".newRow");
		$allRows.each(function(i,el){
			$(el).remove();
		});
	}
})
