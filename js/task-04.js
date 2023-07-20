let counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');

decBtn.addEventListener('click', onDecBtnClick)

incBtn.addEventListener('click', onIncBtnClick)

function onDecBtnClick() {
    counterValue -= 1;
    console.log(counterValue);
    spanEl.innerHTML = counterValue;
}


function onIncBtnClick() {
    counterValue += 1;
    console.log(counterValue);
    spanEl.innerHTML = counterValue;
}
