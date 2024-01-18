//Create a random dice roll number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Define the dice image, so it can read it out
var randomDiceImage ="dice" + randomNumber1 + ".png";

//dice1-6.png is included in images folder, Define images folder
var RandomImageSource="images/" + randomDiceImage;

//Define a variable to select the all img tag starting from the first
var image1 = document.querySelectorAll("img")[0]; 

//Set img attribute to the customized random image source return
image1.setAttribute("src", RandomImageSource);

//For the second dice

//Create a random dice number
var randomNumber2 = Math.floor(Math.random() * 6) +1;

//Define the Dice image
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//Define the image path
var RandomImageSource2 ="images/" + randomDiceImage2;

//Define a variable to select the all img tag starting from the second and set image attribute to random return
var image2 = document.querySelectorAll("img")[1].setAttribute("src", RandomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

//if same 
else {document.querySelector("h1").innerHTML = "Draw!"};



