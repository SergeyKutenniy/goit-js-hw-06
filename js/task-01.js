// Выводит количество груп #categories

const elCategories = categories.querySelectorAll(".item");
console.log("Number of categories: ", elCategories.length);

// Выводит количество подкатегорий группы "Animal"

const groupAnimals = categories.querySelector(".item");
console.log("Category: ", groupAnimals.firstElementChild.textContent);

const typeGroupAnimals = groupAnimals.querySelectorAll("li");
console.log("Elements: ", typeGroupAnimals.length);

// Выводит количество подкатегорий группы "Products"

const groupProducts = categories.querySelectorAll(".item");
console.log("Category: ", groupProducts[1].firstElementChild.textContent);

const typeGroupProducts = groupProducts[1].querySelectorAll("li");
console.log("Elements: ", typeGroupProducts.length);

// Выводит количество подкатегорий группы "Technologies"

const groupTechnologies = categories.querySelectorAll(".item");
console.log("Category: ", groupTechnologies[2].firstElementChild.textContent);

const typeGroupTechnologies = groupTechnologies[2].querySelectorAll("li");
console.log("Elements: ", typeGroupTechnologies.length);
