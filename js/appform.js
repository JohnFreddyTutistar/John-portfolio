const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const message = document.querySelector("#message")
const btnSubmit = document.querySelector("#btnSubmit");

const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const alerMessage = document.querySelector("#alertMessage")
const alertSuccess = document.querySelector("#alertSuccess");

const pintarMensajeEnviado = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = "Message sent succesfully";
}

const pintarMensajeError = (errores) => {

    errores.forEach(item => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg;

    })

}

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regMessage = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

btnSubmit.addEventListener("click", e => {
    e.preventDefault();

    alertSuccess.classList.add("d-none")

    const errores = []

    //validacion nombre de usuario

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Invalid format in the name field"
        })
    } else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")     
    }

    //validacion email de usuario
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "write a valid email"
        })
    } else {
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    //validacion mensaje
    if (!regMessage.test(message.value) || !message.value.trim()) {
        message.classList.add("is-invalid")
        errores.push({
            tipo: alerMessage,
            msg: "write a message"
        })
    } else {
        message.classList.remove("is-invalid")
        message.classList.add("is-valid")
        alerMessage.classList.add("d-none")

    }
    if (errores.length != 0) {
        pintarMensajeError(errores)
        return
    }

    pintarMensajeEnviado()
});