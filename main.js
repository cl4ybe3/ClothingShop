document.getElementById("register").addEventListener("click", 
function(){
    //display register section
    const register_platform = document.getElementById("register-container");
    register_platform.style.display = "initial";
    
})

document.getElementById("login").addEventListener("click", 
function(){
    //display login section
    const login_platform = document.getElementById("login-container")
    login_platform.style.display = "initial";
})

document.getElementById("closing-register").addEventListener("click",
function(){
    const register_platform = document.getElementById("register-container");
    register_platform.style.display = "none";
})

document.getElementById("closing-login").addEventListener("click",
function(){
    const login_platform = document.getElementById("login-container");
    login_platform.style.display = "none";
})

document.getElementById("register-submit").addEventListener("click",
function(){
    let password = document.getElementById("password");
    let password_again = document.getElementById("password-again");
    
    let register_confirm = document.getElementById("register-confirm");
    
    if (password.value !== password_again.value){
        event.preventDefault();
        register_confirm.style.display = "initial";
    }
    else{
        register_confirm.style.display = "none";
    }
})