console.log("Welcome to the password validator");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



containsNumbers = false

reader.question("Enter the password to validate: ", function(input){
    passwordLength = input.length;
    for(i = 0; i < passwordLength; i++){
        if(input[i] !== isNaN){
            containsNumbers = true;
        }
    }
    if(passwordLength >= 10){
        console.log("Success");
        if(containsNumbers = true){
            console.log("Password is strong");
        }
    }else {
        console.log("FAIL")
        }
    
    
	reader.close()

});

