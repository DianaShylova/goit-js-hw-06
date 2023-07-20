const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputChecking);

function onInputChecking(event) {
    const inputValue = input.value;
    const nesesseryInputLength = Number(event.currentTarget.dataset.length); 

    if (inputValue.length === nesesseryInputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};






