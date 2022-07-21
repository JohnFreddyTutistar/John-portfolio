const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const message = document.querySelector("#message")
const btnSubmit = document.querySelector("#btnSubmit");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regMessage = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

btnSubmit.addEventListener("click", e => {
    e.preventDefault();

    console.log(regUserName.test(userName.value))
    console.log(regUserEmail.test(userEmail.value))
    console.log(regMessage.test(message.value))

    if(regUserName.test(userName.value) && regUserEmail.test(userEmail.value) && regMessage.test(message.value)){
        console.log("formulario enviado")
    } else{
        console.log("Fallos en los datos")
    }
});