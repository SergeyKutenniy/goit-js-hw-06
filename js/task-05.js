const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const updateValue = (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener("input", updateValue);
