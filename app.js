const inputs = document.querySelectorAll('.text-input input');
const emailInput = document.querySelector('.email input');
const emailError = document.querySelector('.email label');
const message = document.querySelectorAll('.text-input label');
const img = document.querySelectorAll('.text-input img');
const btn = document.querySelector('.form button');
btn.addEventListener('click', e => {
    e.preventDefault();
    inputs.forEach( (input,index) => {
        const name = input.placeholder;
        if(input.value.length === 0) {
            message[index].innerHTML = `${name} cannot be empty`;
            img[index].classList.add('active');
        } else {
            message[index].innerHTML = "";
            img[index].classList.remove('active')
        }
    })
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        document.querySelector('.email img').classList.add('active');
        emailError.innerHTML = "Looks like this is not an email";
    } else {
        document.querySelector('.email img').classList.remove('active');
        emailError.innerHTML = "";
    }
})
