const form = document.querySelector(`form`);
const input = document.querySelector(`input`);

// updateInput();
form.addEventListener(`input`, saveMessage);

function saveMessage(evt) {
const email = form.elements.email.value;
const message = form.elements.message.value;
const TRY_ANOTHER_KEY = {
    email,
    message
}
console.log(TRY_ANOTHER_KEY)
    localStorage.setItem("feedback-form-state", JSON.stringify(TRY_ANOTHER_KEY))
    updateInput();
    form.reset
}

// function updateInput() {
//     input.textContent = localStorage.getItem(TRY_ANOTHER_KEY);
//     // textarea.textContent = localStorage.getItem(SECOND_KEY)|| "";
// }