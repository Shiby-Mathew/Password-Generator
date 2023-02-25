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

//function definition
function generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  var charType1 = confirm("Enter a character type: special");
  var charType2 = confirm("Enter a character type: numeric");
  var charType3 = confirm("Enter a character type: uppercase");
  var charType4 = confirm("Enter a character type: lowercase");

  //An object created
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()+|<>?",
  };

  //Checking Values true  and adding to charSet
  var charSet = "";

  if (charType1) {
    charSet += charSets.special;
  }
  if (charType2) {
    charSet += charSets.numeric;
  }
  if (charType3) {
    charSet += charSets.uppercase;
  }
  if (charType4) {
    charSet += charSets.lowercase;
  }

  //Creating random number

  var returnValue = "";
  for (var i = 0; i < length; i++) {
    returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
    console.log(returnValue);
  }
  return returnValue;
}
