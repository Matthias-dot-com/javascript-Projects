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

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  let value = input.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    innerContent(value, id);
    displayAlert("Item Added successfully", "success");
    setBackToDefault();
  } else if (value && editFlag) {
    displayAlert("Item Updated successfully...", "success");
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

function innerContent(value, id) {
  let element = document.createElement("article");
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

  list.append(element);
  const editBtn = document.querySelector(".edit-btn");
  const deleteBtn = document.querySelector(".delete-btn");
  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);
  list.classList.add("show-container");
}

function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}

function clearField() {
  list.innerHTML = "";
  groceryContainer.classList.remove("show-container");
}

function deleteItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  list.remove(element);
  if (list.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }
  displayAlert("Item Removed","danger")
  removeFromLocalStorage();
}

function editItem(e) {
  console.log(e.currentTarget.parentNode.parentElement.getAttribute("data-id"));
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
