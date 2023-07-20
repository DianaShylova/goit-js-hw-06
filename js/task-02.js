const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function liOfingredients(arr) {
  return arr.map(elem => {
    const liElem = document.createElement("li");
    liElem.textContent = elem;
    liElem.classList.add('item');
    return liElem;
  });
}
console.log(liOfingredients(ingredients));

const ulEl = document.querySelector('#ingredients');
ulEl.prepend(...liOfingredients(ingredients));