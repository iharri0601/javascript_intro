console.log("Hello Izaiah");
var number1 = 20;
var number2 = 30;
var sum = number1 + number2;
console.log(sum);
var puppy = {
  name: 'cassius',
  color: 'brown',
  age: 8
};
console.log(puppy);
console.log(puppy.name);
puppy.age = puppy.age + 4;
console.log(puppy.age);
puppy.weight = puppy.age + 10;
console.log(puppy.weight);
var warm = true;
if (warm) {
  console.log("wear shorts!");
} else {
  console.log("Make sure you grab a jacket!");
};
var height = 36;
if(height < 52) {
  console.log('Sorry. You can\'t ride the ride!');
}



var ten = 5 + 5;

var twelve = 7 + 5;

var fifteen = 10 + 5;

function plusfive(number) {
  console.log(number + 5);
}

var ten = plusfive(5);
var twelve = plusfive(7);
var fifteen = plusfive(10);

function plusten(num) {
  console.log(num + 10);
  return num + 10;
}

var twenty = plusten(10);
var thirty = plusten(20);

var myconsole = {};

myconsole.log = function(word) {
  console.log(word + "from Alex ");
}

myconsole.log("hey ");

var mysentence = {} ;
function sentence (word1, word2) {
  mysentence = word1 + word2;
 console.log("Inside function: " + mysentence);
return [mysentence, word1];
}

var speech = sentence("howdy ", "folks! ");
console.log(speech);
