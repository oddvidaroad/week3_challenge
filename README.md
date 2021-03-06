Challenge 3: Password Generator


Created an application that prompts the user for password criteria and validates the input at each step then presents the user with a password that meets the chosen requirements. Allows the user to exit gracefully.


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

Initial State

![The Password Generator application displays a red button to "Generate Password".](./assets/images/03-javascript-homework-demo.png)

Password Prompt Example

![The Password Generator application displays a prompt for password length.](./assets/images/03-javascript-homework-demo-functionality.png)

Password Displayed Based on Chosen Criteria

![The Password Generator application displays a prompt for password length.](./assets/images/03-javascript-homework-demo-pass.png)
