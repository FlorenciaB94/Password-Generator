
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I need a function and prompts for each criteria:
// length of 8 min 128 max
//character types:
//lowercase? 
//uppercase? 
//numeric?
// and/or special characters?

// declare password criteria variables
var choices= "";
var pwdLength;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [ 1,2,3,4,5,6,7,8,9];
var specialSymbol = ["!", "#", "$","%", "&","(",")","*","+",",","-",".","/",",",":",";","<","=",">","?","@","^","[","\\","]","^","_","`","{","|","}","~"];

// grabbing a random char from string
// concat and need a for loop
//combine all different var into single array
function randomChar(arr){
  var num = Math.floor(Math.random ()* arr.length);
  // console.log(num);
  return arr[num];
}
var OkLowerCase = randomChar(lowerCase);
var OkUpperCase = randomChar(upperCase);
var OkNumeric = randomChar(numeric);
var OkSpecialSymbol = randomChar(specialSymbol);
 

//generate pwd function
function createPwd(){
  var pw = "";
  pwdLength = parseInt(prompt("How long do you need your password to be? Min 8 Max 128"));
  // console.log(pwdLength);
  if (!pwdLength){
    alert("Please enter password length")
    return
  } else if (pwdLength > 128 || pwdLength < 8) {
    pwdLength = parseInt(prompt("Try again, enter a number between 8 and 128"))
  if (pwdLength > 128 || pwdLength < 8){
  pw += pw.concat(length);
  };
};
    if (lowerCase = confirm("Do you need lowercase letters?") == true){
      pw += pw.concat(OkLowerCase);
 console.log(pw);
    }
    if (upperCase = confirm("Do you need uppercase letters?") == true){
      pw += pw.concat(OkLowerCase, OkUpperCase);
 console.log(pw);
    }
    if (numeric = confirm("Do you need numbers?") == true){
      pw += pw.concat(OkLowerCase, OkUpperCase, OkNumeric);
 console.log(pw);
    }
    if(specialSymbol = confirm ("Do you need special characters?") == true){
      pw += pw.concat(OkLowerCase, OkUpperCase, OkNumeric, OkSpecialSymbol);
 console.log(pw);
 return
    };
  // adding character to new pwd array
// pw += randomChar(lowerCase);
// console.log(pw);
// pw += randomChar(upperCase);
// console.log(pw);
// pw+= randomChar(numeric);
// console.log(pw);
// pw+= randomChar(specialSymbol);
// console.log(pw);

}

createPwd();

