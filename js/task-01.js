const allCategories = document.querySelectorAll("li.item");

console.log(`Number of categories ${allCategories.length}`);

/* const categoryName = document.querySelectorAll("h2");

categoryName.forEach((catName) => console.log(catName));

allCategories.forEach((category) => console.log( category.length));  */
allCategories.forEach(el => {
    console.log(
        ` Category: ${el.firstElementChild.textContent} \n elements: ${el.lastElementChild.children.length}`

    )
}
)
