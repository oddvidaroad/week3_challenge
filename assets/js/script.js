// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Set function variables.
  let exitMessage = "See ya later. I'll be here when you are ready to try again.";
  let yesNoMsg = "Please type Yes or No only";
  let answerArr = [];
  let password = [];
  let lowerArr = ["abcdefghijklmnopqrstuvwxyz"];
  let upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let specialArr = ["!@#$%^&*_+=/<>?~"];
  let numberArr = ["1234567890"];
  let passwordText = document.querySelector("#password");

  // while will run the function so long as the function is true (ie so long as the user does not click cancel on the prompt or the function returns a value.)
  while (true) {
    // declare variable password length.
    let pwOptionLength = prompt("Please selet a length for your password between 8 and 128 Characters.");
    // Conditional statement; if the length is type and value null the exit the function because the user has cancelled the operation.
    if (pwOptionLength === null) {
      // In case the user hits the cancel button, then let them exit gracefully.
      alert(exitMessage);
      // return true to exit the function.
      return true;
    } else {
      // parseInt will return a value of a number or NaN if the number is not a number. Password length must be between 8 and 128 characters and a number.
      if (parseInt(pwOptionLength) >= 8 && parseInt(pwOptionLength) <= 128) {
        //console.log("valid input from user. " + pwOptionLength);
        // Set the value of the length to be an integer so I can do math with it as a number.
        pwOptionLength = parseInt(pwOptionLength);
        // Ask the user if they want to use Lower Case Letters.
        while (true) {
          let pwOptionLower = prompt("Would you like to use lower case letters? Please enter Yes or No");
          // if the user hits cancel on the prompt the value 'null' is recorded and therefore we exit the while and let the user know they are out.
          if (pwOptionLower === null) {
            alert(exitMessage);
            return true;
          } else {
            // the users entry must match yes or no when the value is made lower case. This will solve for all combos of YES,'Yes     ',  Yes YEs, No, NO, etc.
            pwOptionLower = pwOptionLower.toLocaleLowerCase().trim();
            // logging to console to see value. 
            console.log(pwOptionLower);
            // if the value  matches yes or no then cont.
            if (pwOptionLower == "yes" || pwOptionLower == "no") {
              //console.log("All Good Lower." + pwOptionLower);
              if (pwOptionLower == "yes") {
                // Answer array is empty but I need to add the lowerArr values in case the user selected Yes.
                answerArr += lowerArr;
                console.log(answerArr);
              }
              // Start next iteration with Upper Case Letters
              while (true) {
                // Ask the user if they want to use Lower Case Letters.
                let pwOptionUpper = prompt("Would you like to use upper case letters? Please enter Yes or No");
                // if the user clicks cancel, then display the alert(exitMessage) and exit the function
                if (pwOptionUpper === null) {
                  alert(exitMessage);
                  return true;
                } else {
                  pwOptionUpper = pwOptionUpper.toLocaleLowerCase().trim();
                  console.log(pwOptionUpper);
                  if (pwOptionUpper == "yes" || pwOptionUpper == "no") {
                    // console.log("All Good Upper." + pwOptionUpper);
                    pwOptionUpper = pwOptionUpper.trim();
                    if (pwOptionUpper == "yes") {
                      answerArr += upperArr;
                      // console.log(answerArr);
                    };
                    // Start next iteration with Upper Special Chars
                    while (true) {
                      let pwOptionSpecial = prompt("Would you like to use special characters? Please enter Yes or No");
                      if (pwOptionSpecial === null) {
                        alert(exitMessage);
                        return true;
                      } else {
                        pwOptionSpecial = pwOptionSpecial.toLocaleLowerCase().trim();
                        if (pwOptionSpecial == "yes" || pwOptionSpecial == "no") {
                          //console.log("All Good Special." + pwOptionSpecial);
                          if (pwOptionSpecial == 'yes') {
                            answerArr += specialArr;
                          }
                          // Start next iteration with Numbers
                          while (true) {
                            let pwOptionNumbers = prompt("Would you like to use numbers? Please enter Yes or No");
                            if (pwOptionNumbers === null) {
                              alert(alert(exitMessage));
                              return true;
                            } else {
                              pwOptionNumbers = pwOptionNumbers.toLocaleLowerCase().trim();
                              // console.log(pwOptionNumbers);
                              if (pwOptionNumbers == "yes" || pwOptionNumbers == "no") {
                                //console.log("All Good Numbers." + pwOptionNumbers);
                                if (pwOptionNumbers == "yes") {
                                  answerArr += numberArr;
                                }
                                // console.log(answerArr);
                                if (answerArr.length !== 0) {
                                  // Split will take the answer array string make each individual value a value in the new array.
                                  answerArr = answerArr.split("");
                                  //   console.log(answerArr);
                                  // For each value starting at 0 to the number of characters in the chosen password length I need to add the a value of the randomly selected value from the array of possible values to total the length chosen tb
                                  for (i = 0; i < pwOptionLength; i++) {
                                    password += answerArr[Math.floor(Math.random() * answerArr.length)];
                                  };
                                  // Set the passwordText (ie the value of the card password text to the password);
                                  passwordText.value = password;
                                  // exit the function by returning the password.
                                  return password;
                                } else {
                                  // if the User did not choose any characters or numbers alert the user to the error and ask them to try again by selecting at least 1 set of characters for the password.
                                  alert("Error making the password. You must choose at least 1 set of characaters to include in the password. Please try again");
                                  return true;
                                }

                              } else {
                                // alert the user of the error.
                                alert(yesNoMsg);
                              };
                            }
                          };
                        } else {
                          // alert the user of the error.
                          alert(yesNoMsg);
                        };
                      };
                    };
                  } else {
                    // alert the user of the error.
                    alert(yesNoMsg);
                  };
                };
              };
            } else {
              // alert the user of the error.
              alert(yesNoMsg);
            };
          };
        };

      } else {
        // Check to see that the chosen value for password length is no NaN and that the length of the value entered is not less than or = 0
        if (pwOptionLength.length <= 0 || isNaN(pwOptionLength)) {
          // let the user know that they need to add a number. Ask them to try again.
          alert("Invalid input. Value cannot be blank and must be a number. Please try again.");
        } else {
          // Remind the user they need to choose a value between 8 and 128.
          alert("Please enter a value between 8 and 128");
          //console.log(pwOptionLength);
        };
      };
    };
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);