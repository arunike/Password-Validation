// Set elements to variables
let password = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

toggleBtn.onclick = function() { // Toggle password visibility
    if (password.type === 'password') { // If password is hidden
        password.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else { // If password is visible
        password.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}

function checkPassword(data) { // Check password 
    // Use regular expressions to check if password contains lowercase, uppercase, digit, special character and minimum length
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');
    
    if(lower.test(data)) { // If password contains lowercase
        lowerCase.classList.add('valid');
    } else { // If password does not contain lowercase
        lowerCase.classList.remove('valid');
    }			
    if(upper.test(data)) { // If password contains uppercase
        upperCase.classList.add('valid');
    } else { // If password does not contain uppercase
        upperCase.classList.remove('valid');
    }
    if(number.test(data)) { // If password contains digit
        digit.classList.add('valid');
    } else { // If password does not contain digit
        digit.classList.remove('valid');
    }
    if(special.test(data)) { // If password contains special character
        specialChar.classList.add('valid');
    } else { // If password does not contain special character
        specialChar.classList.remove('valid');
    }
    if(length.test(data)) { // If password contains minimum length
        minLength.classList.add('valid');
    } else { // If password does not contain minimum length
        minLength.classList.remove('valid');
    }
}