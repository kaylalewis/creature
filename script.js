var animal = ["ostrich","cat","parrot","octopus","eel","shark","rabbit","lizard","mushroom","pizza"];
var place = ["Mars","Ohio","the desert","Italy","Antarctica","Austin"];
var year = ["1924","2050","1712","4000"];
var activity = ["dancing","running","singing","fighting","warrior","presidential","stoic","nomad","drunk"];

// console.log("random", randomAnimal);

function create() {

	var randomActivity = activity[Math.floor(Math.random() * activity.length)];
	document.getElementById("activity").innerHTML = randomActivity;

	var randomAnimal = animal[Math.floor(Math.random() * animal.length)];
	document.getElementById("animal1").innerHTML = randomAnimal;

	var randomAnimal2 = animal[Math.floor(Math.random() * animal.length)];
	document.getElementById("animal2").innerHTML = randomAnimal2;

	// var randomPlace = place[Math.floor(Math.random() * place.length)];
	// document.getElementById("place").innerHTML = randomPlace;

	var randomYear = year[Math.floor(Math.random() * year.length)];
	document.getElementById("year").innerHTML = randomYear;

};