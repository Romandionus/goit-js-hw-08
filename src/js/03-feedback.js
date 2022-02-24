import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);

let objectText = {};
updateInput();
form.addEventListener(`submit`, evt => {
  
  const message = evt.currentTarget.elements.message.value;
  const email = evt.currentTarget.elements.email.value;
  
  
  if (email && message) {
      evt.preventDefault();
      localStorage.clear();
      form.reset();
      objectText = {};
    console.log({ email, message })
    } else {
      alert(`заполни все поля`)
    }
});

form.addEventListener(`input`, throttle(evt => {
  objectText[evt.target.name] = evt.target.value
  localStorage.setItem(`feedback-form-state`, JSON.stringify(objectText))
  }, 500))
  
function updateInput() {
  let valueInput = localStorage.getItem(`feedback-form-state`)
    if (valueInput) {
      valueInput = JSON.parse(valueInput);
      Object.entries(valueInput).forEach(([name, value]) => {
        console.log([name, value])
        form.elements[name].value = value;
        objectText[name] = value;
      });
  }
}









// let formData = { email, message };

// const formData = new FormData(form)
  // formData.forEach((value, key) =>
  //   console.log(value, key));

//   // //             objectText[name] = value;
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

// function clearFormAndLocalStorage(evt) {
//     if (evt.currentTarget.elements.message.value) {
//       evt.preventDefault();
//       localStorage.clear();
//       form.reset();
//     } else {
//       alert(`заполни все поля`)
//     }
//   }