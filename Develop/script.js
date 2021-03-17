var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['`', '~', '!', '@', '#', '%', '$', '^', '&', '*', '(', ')', '_', '-', '+', '=', ';', ':', '/', '>', '<', '.', ',']
var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var allOptions = []


function generatePassword() {
// Size of password
  var sizeOfPassword = parseInt(prompt("Please enter the password size you want"));
  console.log(sizeOfPassword);

    // Larger than 8, smaller than 128
if (sizeOfPassword < 8) {
  alert("Your password is less than 8 characters")
  return;
}
if (sizeOfPassword > 128) {
  alert("Your password is larger than 128 characters")
  return;
}

    // Lowercase
  var lowercaseAnswer = confirm("Do you want lowercase letters?");

  console.log(lowercaseAnswer);


    // Uppercase
var uppercaseAnswer = confirm("Do you want uppercase letters?");

console.log(uppercaseAnswer);


    // Special characters
var specialCharactersAnswer = confirm("Do you want special characters?");

console.log(specialCharactersAnswer);


    // Numerical
var numericalAnswer = confirm("Do you want to add numbers?");

console.log(numericalAnswer);

for (var i = 0; i < sizeOfPassword; i++) {
  console.log(upperCase[Math.floor(Math.random()*upperCase.length)]);
}

// for (var i = 0, n = sizeOfPassword.length; i < length; ++i) {
//   retVal += sizeOfPassword.charAt(Math.floor(Math.random() * n));

}

// Big array Push
if (specialCharactersAnswer = true) {
   allOptions.push(specialCharacters);
}

if (uppercaseAnswer = true) {
  allOptions.push(upperCase);
}

if (lowercaseAnswer = true) {
  allOptions.push(lowerCase);
}

console.log(allOptions);


// const randomElement = allOptions[Math.floor(Math.random() * sizeOfPassword.length)];


// Computer generates password
  var index = Math.floor(Math.random() * generatePassword.length);
  // var computerChoice = options[allOptions];



// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);