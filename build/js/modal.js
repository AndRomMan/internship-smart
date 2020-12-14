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

  function setTabindex(elements, index) {
    elements.forEach(function (activeElement) {
      activeElement.setAttribute('tabindex', '' + index);
    });
  }

  function removeTabindex(elements) {
    elements.forEach(function (activeElement) {
      activeElement.removeAttribute('tabindex');
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
//# sourceMappingURL=modal.js.map
