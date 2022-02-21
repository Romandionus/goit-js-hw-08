const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
// const textarea = document.querySelector(`textarea`);
const LOCALSTORAGE_KEY = "feedback-form-state";
const SECOND_KEY = "message-value";

updateInput();
// form.addEventListener(`submit`, saveMessage);
form.addEventListener(`input`, saveMessage);

function saveMessage(evt) {
    evt.preventDefault();
    localStorage.setItem(SECOND_KEY, form.elements.message.value);
    localStorage.setItem(LOCALSTORAGE_KEY, form.elements.email.value);
    updateInput();
    form.reset
}

function updateInput() {
    input.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
    // textarea.textContent = localStorage.getItem(LOCALSTORAGE_KEY)|| "";
}