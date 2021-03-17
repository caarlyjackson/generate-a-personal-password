var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['`', '~', '!', '@', '#', '%', '$', '^', '&', '*', '(', ')', '_', '-', '+', '=', ';', ':', '/', '>', '<', '.', ',']
var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var allOptions = []

                          // GET PASSWORD INFO FROM USER
function getPasswordInfo() {
// function generatePassword() {
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

// Large array - Build (push)
function generatePassword(){
  var passwordInfo = getPasswordInfo()

  if (specialCharactersAnswer = true) {
      allOptions.push(specialCharacters);
  }
  if (uppercaseAnswer = true) {
      allOptions.push(upperCase);
  }
  if (lowercaseAnswer = true) {
      allOptions.push(lowerCase);
  }

  var passwordInfo = {
    length : sizeOfPassword,
    hasSpecial : specialCharactersAnswer,
    hasNumeric : numericalAnswer,
    hasLowercase: lowercaseAnswer,
    hasUppercase : uppercaseAnswer,
  }
  return passwordInfo;
}


                          // GENERATE PASSWORD

// FROM RPS HOMEWORK: Get random index from array of options
  var index = Math.floor(Math.random() * allOptions.length);
  var computerChoice = allOptions[index];


// Assignment Code
var generateBtn = document.querySelector("#generate");


                          // WRITE PASSWORD

// Write password to the #password input
function writePassword() {
  var password = getPasswordInfo();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);