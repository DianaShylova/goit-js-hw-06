function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColBtn = document.querySelector('button.change-color'); 
const colorSpan = document.querySelector('span.color');

changeColBtn.addEventListener('click', function(){
  let color = getRandomHexColor();
  colorSpan.innerHTML = color;
  document.body.style.backgroundColor = color;
})