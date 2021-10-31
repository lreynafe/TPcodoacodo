window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const telefonoValor = telefono.value.trim()

        if(!nombreValor){
            validaFalla(nombre, 'Ingrese su nombre')
        }else{
            validaOk(nombre)
        }

        if(!emailValor){
            validaFalla(email, 'Ingrese su email')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
        
         if(!telefonoValor) {
             validaFalla(telefono, 'Ingrese su teléfono')
         } else {
             validaOk(telefono)
         }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})