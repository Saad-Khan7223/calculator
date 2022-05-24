var string = "";
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.input').value = string;
        } else if (e.target.innerHTML == 'Del') {
            string = "";
            document.querySelector('.input').value = string;
        } else if (e.target.innerHTML == 'sqrt') {
            string = Math.sqrt(string);
            document.querySelector('.input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})
let percentage = document.querySelector('.per')
percentage.addEventListener('click', (e) => {
    if (e.target.innerHTML == '%') {
        console.log(e.target);
    }
})