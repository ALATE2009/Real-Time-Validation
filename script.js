function validate(e){
    e.preventDefault()

    const email=document.getElementById("email").value
    const pass=document.getElementById("password").value
    const age=document.getElementById("age").value

    const  msgbox=document.getElementById("message")
    var  message=""

    if(email===""){
        message="enter an email"
        msgbox.style.color="red"
    }

    else  if(pass===""){
        message="enter a password"
     msgbox.style.color="red"
    }

    else  if(age===""){
        message="enter age"
     msgbox.style.color="red"
    }

    else {
     message="login successful"
     msgbox.style.color="green"
    }

    msgbox.innerText=message
}