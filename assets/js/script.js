// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // while will run the function so long as the function is true (ie so long as the user does not click cancel on the prompt.)
  while (true) {
    var exitMessage = alert("See ya later. I'll be here when you are ready to try again.");
    var yesNoMsg = alert("Please type Yes or No only");
    // declare variable password length.
    let pwOptionLength = prompt("Please selet a length for your password between 8 and 128 Characters.");
    // Conditional statement; if the length is type and value null the exit the function because the user has cancelled the operation.
    if (pwOptionLength === null) {
      // user hit cancel
      exitMessage;
      // return true to exit the function.
      return true;
    } else {
      // parseInt will return a value of a number or NaN if the number is not a number. Password length must be between 8 and 128 characters and a number.
      if (parseInt(pwOptionLength) < 8 || parseInt(pwOptionLength) > 128) {
        // User added a number but the value is either greater than 128 or less than 8.
        alert("Invalid input. Please choose a number between 8 and 128.");
        // user did not enter a value and clicked OK || entered a string that resulted in NaN
      } else if (pwOptionLength.length <= 0 || isNaN(pwOptionLength)) {
        // let the user know that they need to add a number. Ask them to try again.
        alert("Invalid input. Value cannot be blank and must be a number. Please try again.");
      } else { // log the output.
        console.log("valid input from user. " + pwOptionLength);
        // return so the function exits the while with the value in hand.
        //  return parseInt(pwOptionLength);
        console.log(pwOptionLength);
      }
    }
    // Ask the user if they want to use Lower Case Letters.
    while (true) {
      let pwOptionLower = prompt("Would you like to use lower case letters? Please enter Yes or No");
      // if the user hits cancel on the prompt the value 'null' is recorded and therefore we exit the while and let the user know they are out.
      if (pwOptionLower === null) {
        exitMessage;
        return true;
      } else {
        // the users entry must match yes or no when the value is made lower case. This will solve for all combos of YES, Yes YEs, No, NO, etc.
        pwOptionLower = pwOptionLower.toLocaleLowerCase();
        // logging to console to see value. 
        console.log(pwOptionLower);
        // if the value  matches yes or no then cont.
        if (pwOptionLower == "yes" || pwOptionLower == "no") {
          console.log("All Good Lower." + pwOptionLower);
          //return pwOptionLower;
          // Start next iteration with Upper Case Letters
          while (true) {
            // Ask the user if they want to use Lower Case Letters.
            let pwOptionUpper = prompt("Would you like to use upper case letters? Please enter Yes or No");
            // if the user clicks cancel, then display the exitMessage and exit the function
            if (pwOptionUpper === null) {
              exitMessage;
              return true;
            } else {
              pwOptionUpper = pwOptionUpper.toLocaleLowerCase();
              console.log(pwOptionUpper);
              if (pwOptionUpper == "yes" || pwOptionUpper == "no") {
                console.log("All Good Upper." + pwOptionUpper);
                // Start next iteration with Upper Special Chars
                while (true) {
                  let pwOptionSpecial = prompt("Would you like to use special characters? Please enter Yes or No");
                  if (pwOptionSpecial === null) {
                    exitMessage;
                    return true;
                  } else {
                    pwOptionSpecial = pwOptionSpecial.toLocaleLowerCase();
                    console.log(pwOptionSpecial);
                    if (pwOptionSpecial == "yes" || pwOptionSpecial == "no") {
                      console.log("All Good Upper." + pwOptionSpecial);
                      // Start next iteration with Numbers
                      while (true) {
                        let pwOptionNumbers = prompt("Would you like to use numbers? Please enter Yes or No");
                        if (pwOptionNumbers === null) {
                          exitMessage;
                          return true;
                        } else {
                          pwOptionNumbers = pwOptionNumbers.toLocaleLowerCase();
                          console.log(pwOptionNumbers);
                          if (pwOptionNumbers == "yes" || pwOptionNumbers == "no") {
                            console.log("All Good Upper." + pwOptionNumbers);
                            //return pwOptionNumbers;
                          } else {
                            yesNoMsg;
                          }
                        }
                      }
                    } else {
                      yesNoMsg;
                    }
                  }
                }
              } else {
                yesNoMsg;
              }
            }
          }
        } else {
        yesNoMsg;
        }
      }
    }

    // passwordText.value = password;

  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);