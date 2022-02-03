const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const elemLi = document.createElement("li");
  elemLi.textContent = ingredients[i];
  elemLi.classList.add("item");
  ingredientsEl.append(elemLi);
}
