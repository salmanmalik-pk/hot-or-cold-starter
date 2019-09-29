$(document).ready(function() {

	//Initial Values while starting game
	var count = 0;
	var guessList = [];
	var randomNumber = Math.floor(Math.random()*100);

	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	})

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	})

	// when users click on the element with the
	// `.js-new-game` class, we'll reset
	// html to start a new game
	$('.js-new-game').click(function(){
		$('.js-feedback').text('Make your Guess!');
		$('.js-guess-count').text('0');
		$('.js-guess-list').empty();
		$("input").prop('disabled', false);
		$('button').removeAttr('disabled',false);
		$('button').removeClass('disabled');
		count = 0
		guessList = [];
		randomNumber = Math.floor(Math.random()*100);
	})


	//The actual game runs here
	$('.game').on('click','button',function(event){
		event.preventDefault();
	  	var currentGuess = $('input').val();
	  	currentGuess = parseInt(currentGuess);
	  	if(currentGuess  >= 0 && currentGuess <= 100){
			if (guessList.indexOf(currentGuess) == -1){
				if (currentGuess != randomNumber){
					count += 1;
					$('.js-guess-count').text(count);
			  		$('.js-guess-list').append('<li>'+currentGuess+'</li>');
			  		guessList.push(currentGuess);
			  		var difference = Math.abs(currentGuess-randomNumber);

			  		if (difference <= 10)
			  		{
			  			$('.js-feedback').text('Very Hot');
			  		}
			  		else if (difference <= 30)
			  		{
			  			$('.js-feedback').text('Hot');
			  		}
			  		else if (difference <= 50)
			  		{
			  			$('.js-feedback').text('Cold');
			  		}
			  		else
			  		{
			  			$('.js-feedback').text('Very Cold');
			  		}
			  	}

			  	else if (currentGuess == randomNumber){
			  		$('.js-feedback').text('You guessed it right!');
			  		confirm('You Won \n Start a New Game');
			  		$("input").prop('disabled', true);
			  		$('button').removeAttr('disabled',true);
			  		$('button').addClass('disabled');
			  	}
		  	}

		  	else{
  				confirm("Your Already Guessed \"" + currentGuess + "\"");
  			}
  			$('input').val('');
  		}
  
  	});

});


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
