

//Fucntions 

$(document).ready(function() {


//random number is chosen when game starts
var chosenNumber = Math.floor(Math.random() * 100) + 19;
$("#mincount").html(chosenNumber);
	console.log(chosenNumber);

// giving minion variables the random runber generator 
var min1 = Math.floor(Math.random() * 11) + 1; 
var min2 = Math.floor(Math.random() * 11) + 1; 
var min3 = Math.floor(Math.random() * 11) + 1; 
var min4 = Math.floor(Math.random() * 11) + 1; 

var winScore = 0;
var loseScore = 0;
var userTotal = 0;


//reset the game
function reset(){
	chosenNumber = Math.floor(Math.random() * 100) + 19;
		$("#mincount").html(chosenNumber);

	min1 = Math.floor(Math.random() * 11) + 1; 
	min2 = Math.floor(Math.random() * 11) + 1; 
	min3 = Math.floor(Math.random() * 11) + 1; 
	min4 = Math.floor(Math.random() * 11) + 1; 

	$("#minneed").html(userTotal = 0);

	// add how users score stays the same
}


//minone clicks add to total count
$("#minone").on("click", function() {
	userTotal = userTotal + min1;

	$("#minneed").html(userTotal);
	if(userTotal === chosenNumber){
		winScore ++;
		$("#wins").html(winScore);
		audioElementWin.play();
		reset();

	}else if(userTotal > chosenNumber){
		loseScore ++;
		$("#lose").html(loseScore);
		audioElementLose.play();
		reset();
	}

});


// mintwo clicks add to total count
$("#mintwo").on("click", function() {
	userTotal = userTotal + min2;

	$("#minneed").html(userTotal);
	if(userTotal === chosenNumber){
		winScore ++;
		$("#wins").html(winScore);
		audioElementWin.play();
		reset();

	}else if(userTotal > chosenNumber){
		loseScore ++;
		$("#lose").html(loseScore);
		audioElementLose.play();
		reset();
	}

});


//minthree clicks add to total count
$("#minthree").on("click", function() {
	userTotal = userTotal + min3;

	$("#minneed").html(userTotal);
	if(userTotal === chosenNumber){
		winScore ++;
		$("#wins").html(winScore);
		audioElementWin.play();
		reset();

	}else if(userTotal > chosenNumber){
		loseScore ++;
		$("#lose").html(loseScore);
		audioElementLose.play();
		reset();
	}
});

//minfour clicks add to total count
$("#minfour").on("click", function() {
	userTotal = userTotal + min4;

	$("#minneed").html(userTotal);
	if(userTotal === chosenNumber){
		winScore ++;
		$("#wins").html(winScore);
		audioElementWin.play();
		reset();

	}else if(userTotal > chosenNumber){
		loseScore ++;
		$("#lose").html(loseScore);
		audioElementLose.play();
		reset();
	}

});


// Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/images/themeSong.mp3");

      // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      });


      var audioElementLose = document.createElement("audio");
      audioElementLose.setAttribute("src", "assets/images/Oh.mp3");

      var audioElementWin = document.createElement("audio");
      audioElementWin.setAttribute("src", "assets/images/Win.mp3")


});














