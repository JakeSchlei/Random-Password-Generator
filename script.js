// defining all the const to cover every special character, upper and lower case letters and numbers

const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let gatherAnswers = [];

function generatePassword(){
  // using parseInt to return a number value instead of a string
  let passwordLength = parseInt(prompt('How many characters would you like your password to be?'))
  if(passwordLength<8 || passwordLength>128){
    alert('Password does not meet minimum length criteria')
    return null;
  }

  let hasSpecialChars = confirm('Would you like special characters?');
  let hasUpperCase = confirm('Would you like any upper case letters?');
  let hasLowerCase = confirm('Would you like lower case letters?');
  let hasNumbers = confirm('Would you like any numbers?');


  if(hasSpecialChars){
    gatherAnswers = gatherAnswers.concat(specialCharacters)
  }if(hasUpperCase){
    gatherAnswers = gatherAnswers.concat(upperCase)
  }if(hasLowerCase){
    gatherAnswers = gatherAnswers.concat(lowerCase)
  }if(hasNumbers){
    gatherAnswers = gatherAnswers.concat(numbers)
    // If user answers no to all above questions they get alerted to add something to meet the requirements 
  }else {
    alert('Password does not meet minimum requirements')
  }

// Using Math.random to help randomize the chracters by getting a value of 0-1 but not one, multiplied by the length of the gathered answers
let results = []
for(let i=0; i<passwordLength; i++){
  let randomIndex = Math.floor(Math.random() * gatherAnswers.length)
  let randomContent = gatherAnswers[randomIndex];
  results.push(randomContent);
}
return results.join("");
}








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

