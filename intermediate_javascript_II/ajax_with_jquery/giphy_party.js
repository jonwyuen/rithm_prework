$(function() {
	var $form = $("form");
	var $gifs = $("#gifs");
	var $search = $("#search");
	var $remove = $("#remove");

	$form.on("submit", function(e){
		e.preventDefault();
		$.ajax({
		    method: "GET",
		    url: " http://api.giphy.com/v1/gifs/search",
		    data: {
		        q: $($search).val(),
		        api_key: "dc6zaTOxFJmzC"
		    },
		    dataType: "json"
		}).then(function(response){
			var $randomGifUrl = response.data[Math.floor(Math.random()*response.data.length)].images.fixed_height.url;
		    var $newGif = $("<img>", {
		    	addClass: "result-gifs",
		    	attr: {
		    		src: $randomGifUrl
		    	}
		    });
		    $gifs.append($newGif);
		}).catch(function(error){
		    console.log(error);
		})
		$form.trigger("reset");
	});

	$remove.on("click", function(e){
		var $allGifs = $(".result-gifs");
		$allGifs.remove();
	});
})
