// ****** SELECT ITEMS **********
const alertMessage = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const input = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option

let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearField);
window.addEventListener("DOMContentLoaded", setupItems);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  let value = input.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createElement(id, value);

    displayAlert("Item Added successfully", "success");
    groceryContainer.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    displayAlert("Item Updated successfully...", "success");
    editElement.innerHTML = value;
    editToLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("Please Enter Value...", "danger");
  }
}

function displayAlert(text, action) {
  alertMessage.textContent = text;
  alertMessage.classList.add(`alert-${action}`);

  setTimeout(() => {
    alertMessage.textContent = "";
    alertMessage.classList.remove(`alert-${action}`);
  }, 1000);
}

function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}

function clearField() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
    console.log("working-in");
  }
  console.log("working-out");
  groceryContainer.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

function deleteItem(e) {
  // let id = this.parentElement.parentElement.getAttribute("data-id");
  let element = e.currentTarget.parentElement.parentElement;
  // let id = element.dataset.id;
  let id = element.getAttribute("data-id");
  list.removeChild(element);
  if (list.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }
  displayAlert("Item Removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  input.focus();
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Edit";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  const item = { id, value };
  let items = getLocalStorage();
  items.push(item);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editToLocalStorage(id, value) {
  // let item = { id, value };
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createElement(item.id, item.value);
    });
    groceryContainer.classList.add("show-container");
  }
}

function createElement(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>

            <button class="delete-btn" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
  const editBtn = element.querySelector(".edit-btn");
  const deleteBtn = element.querySelector(".delete-btn");
  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);

  list.appendChild(element);
}
