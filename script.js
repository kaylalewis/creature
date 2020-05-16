var animal = ["ostrich","cat","parrot","octopus","eel","shark","rabbit","lizard","librarian","barista","mushroom","pizza","robot","ballerina","raccoon","spider","jellyfish","dinosaur","frog","rat","martini","astronaut","cactus","vacuum","antelope","clown","seahorse","turnip","kangaroo","pickle","snail","icicle","armchair","monkey","squirrel","sunflower","armadillo","taco","crab","conductor","chef"];
var place = ["Mars","Ohio","the desert","Italy","Antarctica","Austin"];
var year = ["1924","2150","1500","4000","700 BC","1980","1960","1865"];
var activity = ["dancing","sleeping","running","singing","fighting","studious","yelling","vicious","presidential","laughing","stoic","nomad","drunk","jovial","mutant","lovesick","happy","senial","classy","complicated","smart","romantic","frightened","tired","stressed","wild","neurotic","glamorous","naive","mischievous","naughty","musical","flexible","shocked","foolish","perplexed","disinterested","compassionate","conscious","smug","veteran"];

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

	// var randomYear = year[Math.floor(Math.random() * year.length)];
	// document.getElementById("year").innerHTML = randomYear;

};

console.log("things:", animal);
console.log("activities:", activity);
