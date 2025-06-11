let name = document.getElementById('name');
let email = document.getElementById('email');
let msg = document.getElementById('feedback');
let nameErr = document.getElementById('nameErr');
let emailErr = document.getElementById('emailErr');
let msgErr = document.getElementById('msgErr');
let submitBtn = document.getElementById('submitBtn');

function onBlurName(){
    nameErr.textContent = "";
    if(name.value === ""){
        nameErr.textContent = "*Required";
        return false;
    }
    return true;
}

function onBlurEmail(){
    emailErr.textContent = "";
    let mailId = email.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = mailId.match(regex);
    if(email.value === ""){
        emailErr.textContent = "*Required";
        return false;
    }
    else if(result === null){
        emailErr.textContent = "Please enter the valid email ID";
        return false;
    }
    return true;
}

function onBlurMsg(){
    msgErr.textContent = "";
    if(msg.value === ""){
        msgErr.textContent = "*Required";
        return false;
    }
    return true;
}

function onSubmit(event){
    event.preventDefault();
    if(onBlurName() && onBlurEmail() && onBlurMsg()){

        alert("Feedback sent successfully!");
        name.value = "";
        email.value = "";
        msg.value = "";
    }
    else{
        alert("Please Enter the valid details...");
    }
}


name.addEventListener('blur',onBlurName);
email.addEventListener('blur',onBlurEmail);
msg.addEventListener('blur',onBlurMsg);
submitBtn.addEventListener('click',onSubmit);