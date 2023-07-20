const sizeControl = document.querySelector('input#font-size-control');
const spanSize = document.querySelector('span#text');

const changeTxt = sizeControl.addEventListener('input', function () {
    let txtSize = sizeControl.value;
    spanSize.style.fontSize = `${txtSize}px`;
   

})


	