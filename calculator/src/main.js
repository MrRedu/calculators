const display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button)=> {
    button.onclick = ()=> {
        if(button.id =='clear'){
            display.innerText = ''
        } else if (button.id == 'backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substring(0, string.length-1)
        } else if (display.innerHTML != "" && button.id=='equal') {
            // let string = "2+2"
            // eval = 2+2
            // Convierte un string en una operación. Si dentro del string existe una operación aritmetica
            display.innerHTML = eval(display.innerHTML)
        } else if (display.innerHTML == "" && button.id=='equal') {
            display.innerHTML='Ingrese los valores'

            setTimeout(()=> {
                display.innerHTML=''
            }, 2000)
        } else {
            display.innerHTML += button.id
        }
    }
})



// dark theme
const themeToggleBtn = document.querySelector('.theme-toggler')
const calculator = document.querySelector('.calculator')

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark')
    themeToggleBtn.classList.toggle('active')

    isDark = !isDark
}
