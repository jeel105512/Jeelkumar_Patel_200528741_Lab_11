const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let inputValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);

  span.textContent = inputValue;
  button.textContent = "Delete";

  button.setAttribute("onclick", "remove(this)");

  ul.appendChild(li);

  input.focus();
});

function remove(element) {
  element.parentElement.remove();
}
