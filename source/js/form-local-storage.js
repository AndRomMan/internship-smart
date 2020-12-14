/* eslint-disable no-undef */
/* eslint-disable no-console */

// form-local-storage.js

'use strict';

(function () {
  let submitFormBtn = document.querySelector('.callback-form__btn');
  let inputUserName = document.querySelector('#username');
  let inputUserphone = document.querySelector('#userphone');
  let inputQuestion = document.querySelector('#userquestion');

  const USER_NAME_KEY = 'username';
  const USER_PHONE_KEY = 'userphone';
  const USER_QUESTION_KEY = 'userquestion';

  let userData = {
    name: '',
    phone: '',
    question: '',
  };

  let userName = '';
  let userPhone = '';
  let userQuestion = '';

  function storageAvailable(type) {
    try {
      let storage = window[type];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  function submitFormBtnClickHandler(evt) {
    evt.preventDefault();
    console.log(`localStorage.length = ${localStorage.length}`);
    // console.log(userData);

    if (storageAvailable('localStorage')) {
      console.log('We can use Local Storage');
      let name = localStorage.getItem(USER_NAME_KEY);
      console.log(name);

      let phone = localStorage.getItem(USER_PHONE_KEY);
      console.log(phone);

      let question = localStorage.getItem(USER_QUESTION_KEY);
      console.log(question);

      console.log(`localStorage.length = ${localStorage.length}`);
    } else {
      console.log('We can not use Local  Storage');
    }
  }

  if (submitFormBtn) {
    submitFormBtn.addEventListener('click', submitFormBtnClickHandler);
  }

  function inputUserNameBlurHandler() {
    userData.name = inputUserName.value;
    userName = inputUserName.value;
    localStorage.setItem(USER_NAME_KEY, userName);
  }

  function inputUserphoneBlurHandler() {
    userData.phone = inputUserphone.value;
    userPhone = inputUserphone.value;
    localStorage.setItem(USER_PHONE_KEY, userPhone);
  }

  function inputQuestionBlurHandler() {
    userData.question = inputQuestion.value;
    userQuestion = inputQuestion.value;
    localStorage.setItem(USER_QUESTION_KEY, userQuestion);
  }

  if (inputUserName) {
    inputUserName.addEventListener('blur', inputUserNameBlurHandler);
  }

  if (inputUserphone) {
    inputUserphone.addEventListener('blur', inputUserphoneBlurHandler);
  }

  if (inputQuestion) {
    inputQuestion.addEventListener('blur', inputQuestionBlurHandler);
  }
})();
