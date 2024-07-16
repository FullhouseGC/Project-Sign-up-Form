let password = document.getElementById("user-password");
let confirmPass = document.getElementById("confir-password");

function passwordCheck(){
    if(password.value == confirmPass.value){
        password.style.outline = "2px solid green"
        confirmPass.style.outline = "2px solid green"
    } else{
        password.style.outline = "2px solid red"
        confirmPass.style.outline = "2px solid red"
    };
}

