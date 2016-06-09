var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


// Correct working functions-----------

function failures (element, index, array) {
	if (element > 49 && element < 61){
		// console.log("Failed grades", element);
		return element;
	}
}
function deese (element, index, array) {
	if (element > 60 && element < 71){
		// console.log("Failed grades", element);
		return element;
	}
}
function cease (element, index, array) {
	if (element > 70 && element < 81){
		// console.log("Failed grades", element);
		return element;
	}
}
function beeze (element, index, array) {
	if (element > 80 && element < 91){
		// console.log("Failed grades", element);
		return element;
	}
}
function ayeyos (element, index, array) {
	if (element > 90 && element < 101){
		// console.log("Failed grades", element);
		return element;
	}
}

var effs = scores.filter(failures).length;
var dees = scores.filter(deese).length;
var cees = scores.filter(cease).length;
var bees = scores.filter(beeze).length;
var ayys = scores.filter(ayeyos).length;


console.log("# of F's", effs);
console.log("# of D's", dees);
console.log("# of C's", cees);
console.log("# of B's", bees);
console.log("# of A's", ayys);


var ordered = scores.sort(function(first, second){
	return first - second;
});
console.log("The lowest grade is", ordered[0]);

var reverse = scores.sort(function(first, second){
	return second - first;
});

console.log("The highest grade is", reverse[0]);



// 
// Attempt at DRY formula----------



// var effs = scores.map(function (element){
// 	if (element > 49 && element < 61){
// 		console.log("test",element);
// 		return element;
// 	}
// })

// console.log(effs.length);

// // function all (){
// // 	scores.forEach(index[element])
// // 		if (element > 60 && element < 71){
// // 			effs[element]= f;
// // 			f++;
// // 			console.log(effs);
// // 		}
	
// // }

// console.log(effs);























