// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

// while will run the function so long as the function is true (ie so long as the user does not click cancel on the prompt.)
while(true){   	  
  var exitMessage = "See ya later. I'll be here when you are ready to try again.";
  // declare variable password length.
    let pwOptionLength = prompt("Please selet a length for your password between 8 and 128 Characters.");
    // Conditional statement; if the length is type and value null the exit the function because the user has cancelled the operation.
    if (pwOptionLength === null) {
        // user hit cancel
        alert(exitMessage);
        // return true to exit the function.
        return true;
    } else{
    // parseInt will return a value of a number or NaN if the number is not a number. Password length must be between 8 and 128 characters and a number.
        if (parseInt(pwOptionLength) < 8 || parseInt(pwOptionLength) > 128 ) {
            // User added a number but the value is either greater than 128 or less than 8.
            alert("Invalid input. Please choose a number between 8 and 128.");
            // user did not enter a value and clicked OK || entered a string that resulted in NaN
        } else if ( pwOptionLength.length <=0 || isNaN( pwOptionLength ) ) {
          // let the user know that they need to add a number. Ask them to try again.
            alert("Invalid input. Value cannot be blank and must be a number. Please try again.");
        }
         else{   // log the output.
            console.log("valid input from user. " + pwOptionLength);
            // return so the function exits the while with the value in hand.
            //  return parseInt(pwOptionLength);
            console.log(pwOptionLength);
        }
     }
     while(true){
      let pwOptionLower = prompt("Would you like to use lower case letters? Please enter Yes or No");
      if(pwOptionLower === null){
        alert(exitMessage);               
        return true;
      }else{
         pwOptionLower = pwOptionLower.toLocaleLowerCase();
         console.log(pwOptionLower);
        if(pwOptionLower =="yes" || pwOptionLower == "no"){
          console.log("All Good." + pwOptionLower);
          return pwOptionLower;
      }
      else{
          alert("Please enter Yes or No only.")
         }          
      }
    }

    
  

 // passwordText.value = password;

}
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
