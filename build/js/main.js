'use strict';

(function () {
  var navList = document.querySelector('.nav__wrapper');
  var contactsList = document.querySelector('.contacts-list');
  var CLOSE_NAV_LIST = 'nav-list--close';
  var CLOSE_CONTACTS_LIST = 'contacts-list--close';
  var TOGGLE_ICON_ON = 'accordeon-toggle__icon--js';
  var ACCORDEON_TOGGLE_ON = 'accordeon-toggle--js';
  var accordeonNavToggle = document.querySelector('.accordeon-toggle--nav');
  var accordeonContactsToggle = document.querySelector('.accordeon-toggle--contacts');
  var accordeonNavToggleBig = document.querySelector('.accordeon--navigation');
  var accordeonContactsToggleBig = document.querySelector('.accordeon--contacts');
  var accordeonNavToggleIconOpen;
  var accordeonNavToggleIconClose;
  var accordeonContactsToggleIconOpen;
  var accordeonContactsToggleIconClose;

  if (accordeonNavToggle) {
    accordeonNavToggleIconOpen = accordeonNavToggle.querySelector('.accordeon-toggle__icon--open');
    accordeonNavToggleIconClose = accordeonNavToggle.querySelector('.accordeon-toggle__icon--close');
    accordeonNavToggle.classList.add(ACCORDEON_TOGGLE_ON);
  }

  if (accordeonContactsToggle) {
    accordeonContactsToggleIconOpen = accordeonContactsToggle.querySelector('.accordeon-toggle__icon--open');
    accordeonContactsToggleIconClose = accordeonContactsToggle.querySelector('.accordeon-toggle__icon--close');
    accordeonContactsToggle.classList.add(ACCORDEON_TOGGLE_ON);
  }

  if (navList) {
    navList.classList.add(CLOSE_NAV_LIST);
  }

  if (contactsList) {
    contactsList.classList.add(CLOSE_CONTACTS_LIST);
  }

  if (accordeonNavToggleIconOpen) {
    accordeonNavToggleIconOpen.classList.add(TOGGLE_ICON_ON);
  }

  if (accordeonContactsToggleIconOpen) {
    accordeonContactsToggleIconOpen.classList.add(TOGGLE_ICON_ON);
  }

  function toggleNavAccordeonState() {
    accordeonNavToggleIconOpen.classList.toggle(TOGGLE_ICON_ON);
    accordeonNavToggleIconClose.classList.toggle(TOGGLE_ICON_ON);
    navList.classList.toggle(CLOSE_NAV_LIST);

    if (accordeonContactsToggleIconClose.classList.contains(TOGGLE_ICON_ON)) {
      accordeonContactsToggleIconOpen.classList.toggle(TOGGLE_ICON_ON);
      accordeonContactsToggleIconClose.classList.toggle(TOGGLE_ICON_ON);
      contactsList.classList.toggle(CLOSE_CONTACTS_LIST);
    }
  }

  function toggleContactsAccordeonState() {
    accordeonContactsToggleIconOpen.classList.toggle(TOGGLE_ICON_ON);
    accordeonContactsToggleIconClose.classList.toggle(TOGGLE_ICON_ON);
    contactsList.classList.toggle(CLOSE_CONTACTS_LIST);

    if (accordeonNavToggleIconClose.classList.contains(TOGGLE_ICON_ON)) {
      accordeonNavToggleIconOpen.classList.toggle(TOGGLE_ICON_ON);
      accordeonNavToggleIconClose.classList.toggle(TOGGLE_ICON_ON);
      navList.classList.toggle(CLOSE_NAV_LIST);
    }
  }

  function toggleNavClickHandler() {
    toggleNavAccordeonState();
  }

  function toggleClassListClickHandler() {
    toggleContactsAccordeonState();
  }

  function activateToggleClickListener() {
    if (accordeonNavToggleBig) {
      accordeonNavToggleBig.addEventListener('click', toggleNavClickHandler);
    }

    if (accordeonContactsToggleBig) {
      accordeonContactsToggleBig.addEventListener('click', toggleClassListClickHandler);
    }
  }

  activateToggleClickListener();
  window.accordeon = {};
})();
'use strict';

(function () {
  var submitFormBtn = document.querySelector('.callback-form__btn');
  var inputUserName = document.querySelector('#username');
  var inputUserphone = document.querySelector('#userphone');
  var inputQuestion = document.querySelector('#userquestion');
  var USER_NAME_KEY = 'username';
  var USER_PHONE_KEY = 'userphone';
  var USER_QUESTION_KEY = 'userquestion';

  function storageAvailable(type) {
    try {
      var storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  function submitFormBtnClickHandler(evt) {
    evt.preventDefault();
    console.log("localStorage.length = ".concat(localStorage.length));

    if (storageAvailable('localStorage')) {
      var name = localStorage.getItem(USER_NAME_KEY);
      console.log(name);
      var phone = localStorage.getItem(USER_PHONE_KEY);
      console.log(phone);
      var question = localStorage.getItem(USER_QUESTION_KEY);
      console.log(question);
      console.log("localStorage.length = ".concat(localStorage.length));
    } else {
      console.log('We can not use Local Storage');
    }
  }

  function inputUserNameBlurHandler() {
    localStorage.setItem(USER_NAME_KEY, inputUserName.value);
  }

  function inputUserphoneBlurHandler() {
    localStorage.setItem(USER_PHONE_KEY, inputUserphone.value);
  }

  function inputQuestionBlurHandler() {
    localStorage.setItem(USER_QUESTION_KEY, inputQuestion.value);
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

  if (submitFormBtn) {}
})();
'use strict';

(function () {
  var PATTERN = '+7 (___) ___ ____';

  function keyCodeProcessing(evt) {
    if (evt.code === 'Tab') {
      return;
    }

    var keyCode;

    if (evt.keyCode) {
      keyCode = evt.keyCode;
      var pos = this.selectionStart;
      if (pos < 3) evt.preventDefault();
      var i = 0;
      var def = PATTERN.replace(/\D/g, '');
      var val = this.value.replace(/\D/g, '');
      var newValue = PATTERN.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');

      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }

        newValue = newValue.slice(0, i);
      }

      var reg = PATTERN.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
      if (evt.type === 'blur' && this.value.length < 5) this.value = '';
    }
  }

  function inputProcessing(input) {
    input.addEventListener('input', keyCodeProcessing, false);
    input.addEventListener('focus', keyCodeProcessing, false);
    input.addEventListener('blur', keyCodeProcessing, false);
    input.addEventListener('keydown', keyCodeProcessing, false);
  }

  function inputPhoneHolder() {
    var inputPhone = document.querySelector('input[type="tel"]');
    inputProcessing(inputPhone);
  }

  window.addEventListener('DOMContentLoaded', inputPhoneHolder);
})();
'use strict';

(function () {})();
'use strict';

(function () {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  var pageBody = document.querySelector('body');
  var callbackSection = document.querySelector('.callback');
  var callbackBtn = document.querySelector('.header__btn');
  var modalCloseBtn = document.querySelector('.form-wrapper__modal-close');
  var inputFocused = document.querySelector('#username');
  var overlayLinks = document.querySelectorAll('a');
  var overlayBtns = document.querySelectorAll('button');
  var overlayInputs = document.querySelectorAll('input');
  var overlayTextareas = document.querySelectorAll('textarea');
  var MODAL_OVERLAY = 'callback';
  var MODAL_WIN = 'modal';
  var BODY_OVERFLOW = 'body--overflow';
  var OUT_OF_TAB = 'advantages-link';

  function setTabindex(elements, index) {
    elements.forEach(function (activeElement) {
      if (activeElement.classList.contains(OUT_OF_TAB)) {
        return;
      } else {
        activeElement.setAttribute('tabindex', '' + index);
      }
    });
  }

  function removeTabindex(elements) {
    elements.forEach(function (activeElement) {
      if (activeElement.classList.contains(OUT_OF_TAB)) {
        return;
      } else {
        activeElement.removeAttribute('tabindex');
      }
    });
  }

  function setOverlayTabindex() {
    [overlayLinks, overlayBtns, overlayInputs, overlayTextareas].forEach(function (elements) {
      setTabindex(elements, -1);
    });
  }

  function setActiveTabindex() {
    var activeBtns = document.querySelectorAll('.modal button');
    var activeInputs = document.querySelectorAll('.modal input');
    var activeTextareas = document.querySelectorAll('.modal textarea');
    [activeBtns, activeInputs, activeTextareas].forEach(function (elements) {
      setTabindex(elements, 0);
    });
  }

  function setInitialTabindex() {
    [overlayLinks, overlayBtns, overlayInputs, overlayTextareas].forEach(function (elements) {
      removeTabindex(elements);
    });
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      removeModalState();
    }
  }

  function callbackSectionClickHandler(evt) {
    var element = evt.target;

    if (element.classList.contains(MODAL_OVERLAY)) {
      removeModalState();
    } else {
      return;
    }
  }

  function addModalState() {
    window.addEventListener('keydown', escapeHAndler);
    pageBody.classList.add(BODY_OVERFLOW);
    callbackSection.classList.add(MODAL_WIN);

    if (callbackSection) {
      callbackSection.addEventListener('click', callbackSectionClickHandler);
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', modalCloseBtnClickHandler);
    }

    setOverlayTabindex();
    setActiveTabindex();
    inputFocused.focus();
  }

  function removeModalState() {
    window.removeEventListener('keydown', escapeHAndler);
    pageBody.classList.remove(BODY_OVERFLOW);
    callbackSection.classList.remove(MODAL_WIN);

    if (callbackSection) {
      callbackSection.removeEventListener('click', callbackSectionClickHandler);
    }

    if (modalCloseBtn) {
      modalCloseBtn.removeEventListener('click', modalCloseBtnClickHandler);
    }

    setInitialTabindex();
  }

  function callbackBtnClickHandler() {
    addModalState();
  }

  function modalCloseBtnClickHandler() {
    removeModalState();
  }

  if (callbackBtn) {
    callbackBtn.addEventListener('click', callbackBtnClickHandler);
  }
})();
'use strict';

(function () {
  var scrollCallbackLink = document.querySelector('.promo__callback-link');
  var scrollAdvantagesLink = document.querySelector('.promo__advantages-link');
  var callbackAnchor = document.querySelector('#callback');
  var advantagesAnchor = document.querySelector('#advantages');

  function linkToCallbackClickHandler(evt) {
    evt.preventDefault();
    callbackAnchor.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }

  function linkToAdvantagesClickHandler(evt) {
    evt.preventDefault();
    advantagesAnchor.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }

  if (scrollCallbackLink && scrollCallbackLink) {
    scrollCallbackLink.addEventListener('click', linkToCallbackClickHandler);
  }

  if (scrollAdvantagesLink && advantagesAnchor) {
    scrollAdvantagesLink.addEventListener('click', linkToAdvantagesClickHandler);
  }
})();
//# sourceMappingURL=main.js.map
