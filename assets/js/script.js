// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let exitMessage = "See ya later. I'll be here when you are ready to try again.";
  let yesNoMsg = "Please type Yes or No only";
  let answerArr = [];
  let password = [];
  var answerMap = {
    1: "loweArr",
    2: "upperArr"
  };
  var lowerArr = ["abcdefghijklmnopqrstuvwxyz"];
  var upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var specialArr = ["!@#$%^&*_+=/<>?~"];
  var numberArr = ["1234567890"];

  // var password = generatePassword() {
  //   console.log("here!");
  //   let passLength = answerArr[0];
  //   let passwordText = "";
  //   if (answerArr[0] = "yes") {
  //     passwordValuePool.push(lowerArr);
  //   };
  //   if (answerArr[2] = "yes") {
  //     passwordValuePool.push(upperArr);
  //   };
  //   if (answerArr[3] = "yes") {
  //     passwordValuePool.push(specialArr);
  //   };
  //   if (answerArr[4] = "yes") {
  //     passwordValuePool.push(numberArr);
  //   };
  //  
  // };
  var passwordText = document.querySelector("#password");
  // while will run the function so long as the function is true (ie so long as the user does not click cancel on the prompt.)
  while (true) {
    // declare variable password length.
    let pwOptionLength = prompt("Please selet a length for your password between 8 and 128 Characters.");
    // Conditional statement; if the length is type and value null the exit the function because the user has cancelled the operation.
    if (pwOptionLength === null) {
      // user hit cancel
      alert(exitMessage);
      // return true to exit the function.
      return true;
    } else {
      // parseInt will return a value of a number or NaN if the number is not a number. Password length must be between 8 and 128 characters and a number.
      if (parseInt(pwOptionLength) >= 8 && parseInt(pwOptionLength) <= 128) {
        console.log("valid input from user. " + pwOptionLength);
        pwOptionLength = parseInt(pwOptionLength);
        // Ask the user if they want to use Lower Case Letters.
        while (true) {
          let pwOptionLower = prompt("Would you like to use lower case letters? Please enter Yes or No");
          // if the user hits cancel on the prompt the value 'null' is recorded and therefore we exit the while and let the user know they are out.
          if (pwOptionLower === null) {
            alert(exitMessage);
            return true;
          } else {
            // the users entry must match yes or no when the value is made lower case. This will solve for all combos of YES, Yes YEs, No, NO, etc.
            pwOptionLower = pwOptionLower.toLocaleLowerCase();
            // logging to console to see value. 
            console.log(pwOptionLower);
            // if the value  matches yes or no then cont.
            if (pwOptionLower == "yes" || pwOptionLower == "no") {
              console.log("All Good Lower." + pwOptionLower);
              if(pwOptionLower == "yes"){
                answerArr +=lowerArr;
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
                  pwOptionUpper = pwOptionUpper.toLocaleLowerCase();
                  console.log(pwOptionUpper);
                  if (pwOptionUpper == "yes" || pwOptionUpper == "no") {
                    console.log("All Good Upper." + pwOptionUpper);
                    if(pwOptionUpper == "yes"){ 
                      answerArr +=upperArr;
                      console.log(answerArr);
                    };
                    // Start next iteration with Upper Special Chars
                    while (true) {
                      let pwOptionSpecial = prompt("Would you like to use special characters? Please enter Yes or No");
                      if (pwOptionSpecial === null) {
                        alert(exitMessage);
                        return true;
                      } else {
                        pwOptionSpecial = pwOptionSpecial.toLocaleLowerCase();
                        console.log(pwOptionSpecial);
                        if (pwOptionSpecial == "yes" || pwOptionSpecial == "no") {
                          console.log("All Good Upper." + pwOptionSpecial);
                          if(pwOptionSpecial == 'yes'){
                          answerArr +=specialArr;
                        }
                          // Start next iteration with Numbers
                          while (true) {
                            let pwOptionNumbers = prompt("Would you like to use numbers? Please enter Yes or No");
                            if (pwOptionNumbers === null) {
                              alert(alert(exitMessage));
                              return true;
                            } else {
                              pwOptionNumbers = pwOptionNumbers.toLocaleLowerCase();
                              console.log(pwOptionNumbers);
                              if (pwOptionNumbers == "yes" || pwOptionNumbers == "no") {
                                console.log("All Good Upper." + pwOptionNumbers);
                                if(pwOptionNumbers == "yes"){
                                  answerArr +=numberArr;
                              }
                                if (answerArr !==0) {
                                    answerArr = answerArr.split("");
                                    console.log(answerArr);
                                    for (var i = 0; i < pwOptionLength;  i++) {
                                          password  += answerArr[Math.floor(Math.random() * answerArr.length)];
                                        };
                                    passwordText.value = password;
                                    return password;
                                } else {
                                  
                                  alert("Error making the password. You must choose at least 1 set of characaters to include in the password. Please try again");
                                  return true;
                                }

                              } else {
                                alert(yesNoMsg);
                              };
                            }
                          };
                        } else {
                          alert(yesNoMsg);
                        };
                      };
                    };
                  } else {
                    alert(yesNoMsg);
                  };
                };
              };
            } else {
              alert(yesNoMsg);
            };
          };
        };

      } else {
        if (pwOptionLength.length <= 0 || isNaN(pwOptionLength)) {
          // let the user know that they need to add a number. Ask them to try again.
          alert("Invalid input. Value cannot be blank and must be a number. Please try again.");
        } else {
          alert("Please enter a value between 8 and 128");
          console.log(pwOptionLength);
        };
      };
    };
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);