//Assignment Code
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
  var charLength = parseInt(
    prompt("Enter a password length between 8 and 128")
  );

  //Checking charLength is less than 8,greater than 128 and is a valid number
  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    charLength = parseInt(prompt("Enter a password length between 8 and 128"));
  }

  //Multiple prompt to accept different criteria
  var charType1 = confirm("Do you want a Special character ? ");
  var charType2 = confirm("Do you want a Numeric value ?");
  var charType3 = confirm("Do you want a Uppercase character ? ");
  var charType4 = confirm("Do you want a Lowercase character ? ");

  //An object created
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTSUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()+|<>?",
  };

  
  var charSet = "";
  var returnValue = "";

  //When the  confirm value is true, the return value will added with charSet
  // returnValue save atleast one character from each criteria is selected(using random index numder)

  if (charType1) {
    var charIndex = Math.floor(Math.random() * charSets.special.length);
    returnValue += charSets.special[charIndex];

    charSet += charSets.special;
  }
  if (charType2) {
    charIndex = Math.floor(Math.random() * charSets.numeric.length);
    returnValue += charSets.numeric[charIndex];

    charSet += charSets.numeric;
  }
  if (charType3) {
    charIndex = Math.floor(Math.random() * charSets.uppercase.length);
    returnValue += charSets.uppercase[charIndex];

    charSet += charSets.uppercase;
  }
  if (charType4) {
    charIndex = Math.floor(Math.random() * charSets.lowercase.length);
    returnValue += charSets.lowercase[charIndex];

    charSet += charSets.lowercase;
  }
  if (charSet == "") {
    alert("Please select any of the options and Try again");
  }

  //Reducing the total length from returnValue length(returnValue is saved value atleast one character from each criteria is selected )
  var randomLen = charLength - returnValue.length;

  //Creating Random value using random method
  for (var i = 0; i < randomLen; i++) {
    returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  //Return value of  generatePassword() function
  return returnValue;
} // End of generatePassword() function
