// Overview: This function creates game objects, by returning a game object when invoked
function GameConstructor(consumerPrice,dealerCost,name, inStock){
  // private variables
  // dealerCost is private so a buyer can't see our ridiculous markup!
  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  // if you are returning an object, set it as the last private variable
  var ourGame = {}; // end of private properties
  // public properties
  //_ signifies a field that we shouldn't modify, but is public
  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];
  // public methods can affect private variables!
  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }//end of methods


  //private methods :
  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }
  //End private methods
    // run events prior to construction if necessary
  myPrivateFunction();
  // return your final object (We will learn about other strategies to construct objects soon!)
  return ourGame;
}

function GameConstructor(consumerPrice,dealerCost,name, inStock){


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};


  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
  return ourGame;
}


function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();


console.log("end")

/* Vehicle Constructor declares an initial variable, vehicle as an object.
  public properties that can be set:
    name, wheels, passengersNumber
  public method:
    makeNoise
  returns vehicle.
*/

function VehicleConstructor(name, wheels, passengerNumber,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  /* Privates */
  var distanceTraveled = 0;
  var self = this;
  function updateDistanceTraveled(){
    distanceTraveled += self.speed;
    console.log(distanceTraveled);
  }
  /* public */
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;

  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  };
  this.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
  };
  this.checkMiles = function(){
    console.log(distanceTraveled);
  };

}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log(car.speed);

console.log("end================")


var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);
