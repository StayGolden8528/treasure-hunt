$(function() { //document ready

// get a random number from 0 to size of the map

let getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
};

//calculate the distance between click event and target of user click

let getDistance = function (event, target) {
	let diffX = event.offsetX - target.x;
	let diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY))
};

//get a string representing the distance

let getDistanceHint = function (distance) {
	if (distance < 10) {
		return "Boiling hot!";
	} else if (distance < 20) {
		return "Really hot";
	} else if (distance < 40) {
		return "hot";
	} else if (distance < 80) {
		return "warm";
	} else if (distance < 160) {
		return "cold";
	} else if (distance < 320) {
		return "really cold";
	} else {
		return "FREEZING";
	}
};

// variables

let width = 400;
let height = 400;
let clicks = 0;

//create a random target location

let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

// add a click event to the image element

$('#map').click(function (event) {
	clicks++;

	//get the distance between clicks and the target

	let distance = getDistance(event, target);
	// convert distance to a hint
	let distanceHint = getDistanceHint(distance);
	//update the distance element with the new hint
	$('#distance').text(distanceHint);

	//if the click was close enough, tell them they won the game
	if (distance < 8) {
		alert("You found the treasure in " + clicks + " clicks!");
	}
});

}); //document ready end