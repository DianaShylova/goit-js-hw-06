const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);


function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.target.elements;

    if (!email.value || !password.value) {
        return alert('Fill in all the fields!!!');
    } else {
        let obj = {
            email: email.value,
            password: password.value,
        };
        console.log(obj);
        evt.target.reset();
    }
}
