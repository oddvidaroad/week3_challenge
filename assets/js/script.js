// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

// while will run the function so long as the function is true. if the value is not true the function will exit.
while(true){   	  
  // declare variable password length.
    var passwordLength = prompt("Input number: ");
    // Conditional statement; if the length is type and value null the exit the function because the user has cancelled the operation.
    if (passwordLength === null) {
        // user hit cancel
        alert("See ya later. I'll be here when you are ready to try again.");
        // return true to exit the function.
        return true;
    } else{
    let passwordLength = prompt("Please selet a length for your password between 8 and 128 Characters.");
    // parseInt will return a value of a number or NaN if the number is not a number. Password length must be between 8 and 128 characters and a number.
        if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 ) {
            // User added a number but the value is either greater than 128 or less than 8.
            alert("Invalid input. Please choose a number between 8 and 128.");
            // user did not enter a value and clicked OK || entered a string that resulted in NaN
        } else if ( passwordLength.length <=0 || isNaN( passwordLength ) ) {
          // let the user know that they need to add a number. Ask them to try again.
            alert("Invalid input. Value cannot be blank and must be a number. Please try again.");
        }
         else{   // log the output.
            console.log("valid input from user. " + passwordLength);
            // return so the function exits the while with the value in hand.
            return parseInt(passwordLength);
        }
     }                    
    }
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
