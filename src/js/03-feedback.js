import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// const input = document.querySelector(`input`);
const object = {};
updateInput();
form.addEventListener(`submit`, evt => {
  evt.preventDefault();
  // console.log(form.elements.email.value)
  // console.log(form.elements.message.value)
  const formData = new FormData(form)
  console.log(formData)
  formData.forEach((value, key) => console.log(value, key));
});


form.addEventListener(`input`, throttle(evt => {
  object[evt.target.name] = evt.target.value
  localStorage.setItem(`feedback-form-state`, JSON.stringify(object))
  // console.log(evt.target.name)
  // console.log(evt.target.value)
  // console.log(object)
}, 500))
  
function updateInput() {
  let valueInput = localStorage.getItem(`feedback-form-state`)
    if (valueInput) {
    valueInput = JSON.parse(valueInput)
      // console.log(valueInput)
      Object.entries(valueInput).forEach(([name, value]) => {
        // console.log(name, value)
        object[name] = value;
        form.elements[name].value = value;
      } )
  }
}
// // updateInput();
// form.addEventListener(`input`, throttle(saveMessage, 500));

// function saveMessage(evt) {
// let email = form.elements.email.value;
// let message = form.elements.message.value;
// const TRY_ANOTHER_KEY = {
//     email,
//     message
// }
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(TRY_ANOTHER_KEY))
//     // updateInput();
//     // form.reset

//   const parsedKey = JSON.parse("feedback-form-state")
// console.log(parsedKey)
// }



// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.

  

// if (!localStorage === "") {
//     email = localStorage.form.elements.email.value;
//     message = localStorage.form.elements.message.value;
// }
//     else {
// form.reset
//     }



// function updateInput() {
//     input.textContent = localStorage.getItem(TRY_ANOTHER_KEY);
//     // textarea.textContent = localStorage.getItem(SECOND_KEY)|| "";
// }

// типо верные догадки

// const serializedState = localStorage.getItem("feedback-form-state");
// console.log(serializedState)
// if (serializedState !== null) {
//     const object = serializedState === null ? null : JSON.parse(serializedState);
    
// }