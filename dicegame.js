"use strict";

 //debugger;

var btnElement= document.getElementById("begin");

btnElement.addEventListener("click", function(){
 runGame();
});

function rollDie(numberOfSides) {
  let dieRoll = Math.floor ((Math.random() * numberOfSides ) + 1 );
  return dieRoll;
}


function displayResult1(result){

    document.getElementById("step1").innerHTML = "Your food genre number is " + result + ". Use the list above and search the corresponding restuarant";
    //alert ("Make sure that you are at step two in the instructions, your food genre is " + result);
    return
}

function displayResult2(result){

    document.getElementById("step2").innerHTML = "Your pre-selected restuarant is " + result;
    // alert ("Make sure that you are step three in the instructions, please select the following option from the list " + result );
    return
}

function displayResult3(result){

    document.getElementById("step3").innerHTML = "Your pre-selected appetizer number is " + result;
    // alert (" Make sure that you are at step five in the instructions, you should order this appetizer " + result );
    return
}

function displayResult4(result){

    document.getElementById("step4").innerHTML = "Your pre-selected drink number is  " + result;
    // alert ("Make sure that you are at step six in the instructions, you should order this drink off your drink menu of choice " + result );
    return
}

function displayResult5(result){

    document.getElementById("step5").innerHTML = "Your pre-selected meal number is  " + result;
    // alert ("Make sure that you are at step seven in the instructions, you should order this meal item " + result );
    return
}

function displayResult6(result){

    document.getElementById("step6").innerHTML = "Your pre-selected dessert number is  " + result;
    // alert ("Make sure that you are at step eight in the instructions, you should order this dessert item " + result );
    return
}




function runGame(){

  let diceArray = [4, 6, 8, 10, 12, 20];

  let restaurantType = rollDie(diceArray[4]);
  displayResult1 (restaurantType);
  //dostep1
  // let restaurantType = rollDie(12);

  let restaurantChoice = rollDie (diceArray[2]);
  displayResult2 (restaurantChoice);

  // let restaurantChoice = rollDie (8);

  let restaurantAppetizer = rollDie ([1]);
  displayResult3 (restaurantAppetizer);

  // let restaurantAppetizer = rollDie (6);

  let restaurantDrink = rollDie ([3]);
  displayResult4 (restaurantDrink);

  // let restaurantDrink = rollDie (10);

  let restaurantMeal = rollDie([5]);
  displayResult5 (restaurantMeal);

  // let restaurantMeal = rollDie (20);

  let restaurantDessert = rollDie ([0]);
  displayResult6 (restaurantDessert);

  // let restauranDessert = rollDie (4);

}
