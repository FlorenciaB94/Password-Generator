
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I need a function and prompts for each criteria:
// length of 8 min 128 max
//character types:
//iclude lowercase? 
//uppercase? 
//numeric?
// and/or special characters?
// declare criteria variables
var length;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [ 1,2,3,4,5,6,7,8,9];
var specialSymbol = ["!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~"]
var specialSym = specialSym.split("");
console.log (specialChar);

//generate pwd function
function createPwd(){
  length = parseInt(prompt("How long do you need your password to be? Min 8 Max 128"));
  if (!length){
    alert("Please enter password length")
  } else if (length > 128 || length < 8) {
    length = parseInt(prompt("Enter a number between 8 and 128"))
  } else {
    lowerCase = confirm("Do you need lowercase letters?");
    upperCase = confirm("Do you need uppercase letters?");
    numeric = confirm("Do you need numbers?");
    specialSym = confirm ("Do you need special characters?")
  }
}

createPwd();

