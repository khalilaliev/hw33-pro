"use strict";

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ul = document.getElementById("ul");

// const generateList = (array) => {
//   array.map((list) => {
//     console.log(list);
//     const li = document.createElement("li");
//     li.innerHTML = /*html*/ `<li>${list}</li>`;
//     ul.appendChild(li);
//   });
// };
// generateList(list);

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  const ul = document.getElementById("ul");
  ul.innerHTML = "";
  if (isNaN(inputValue) || inputValue === "") {
    input.classList.add("error");
    input.value = "Enter a valid number!";
  }

  for (let i = 0; i < inputValue; i++) {
    const li = document.createElement("li");
    li.textContent = `<li>${i + 1}</li>`;
    ul.appendChild(li);
  }
});

document.getElementById("input").addEventListener("focus", () => {
  const input = document.getElementById("input");
  if (input.classList.contains("error")) {
    input.classList.remove("error");
    input.value = "";
  }
});
