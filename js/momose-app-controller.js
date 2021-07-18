class MomoseAppController {
    constructor() {
        this.fadeInRegister()
        this.register = document.querySelector('.register')
        this.input1 = document.querySelector('.input-data1')
        this.input2 = document.querySelector('.input-data2')
        this.input3 = document.querySelector('.input-data3')
        this.submit()
    }

    fadeInRegister() {
        document.querySelector('#call-register').addEventListener('click', e => {
            this.input1.disabled = false;
            this.input2.disabled = false;
            this.input3.disabled = false;
            this.register.classList.add('fade-in')
        })
    }

    submit() {
        this.register.addEventListener('submit', e => {
            e.preventDefault()
            let name = document.querySelector('#name').value
            let email = document.querySelector('#email').value
            let data = { name, email }
            let convertData = JSON.stringify(data)
            localStorage.setItem('lead', convertData)
            let submitOk = document.querySelector('#submit')
            submitOk.value = `CADASTRADO`
            setTimeout(() => {
                this.input1.disabled = true;
                this.input2.disabled = true;
                this.input3.disabled = true;
                this.register.classList.remove('fade-in')
            }, 3000)
        })
    }

}
