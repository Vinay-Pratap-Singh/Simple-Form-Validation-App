let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confPassword = document.getElementById("confPassword");

function check(){
    if(username.value == "" || username.value.length < 5){
        alert("Please select a Username\nUsername should be more than 4 letters");
    }

    else if(email.value == ""){
        alert("Please enter a valid Email");
    }

    else if(password.value != confPassword.value || password.value == "" || confPassword.value == "" || password.value.length < 5 || confPassword.value.length < 5){
        alert("Your Password is Mismatched\nEmpty Password is not Allowed\nPassword length should be more than 4");
    }

    else{
        alert("Account Created Successfully");
    }
}