// modal.js
'use strict';

(function () {
  // polyfill forEach for IE 11
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  let pageBody = document.querySelector('body');
  let callbackSection = document.querySelector('.callback');
  let callbackBtn = document.querySelector('.header__btn');
  let modalCloseBtn = document.querySelector('.form-wrapper__modal-close');
  let inputFocused = document.querySelector('#username');

  let overlayLinks = document.querySelectorAll('a');
  let overlayBtns = document.querySelectorAll('button');
  let overlayInputs = document.querySelectorAll('input');
  let overlayTextareas = document.querySelectorAll('textarea');

  const MODAL_OVERLAY = 'callback';
  const MODAL_WIN = 'modal';
  const BODY_OVERFLOW = 'body--overflow';
  const OUT_OF_TAB = 'advantages-link';

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
    let activeBtns = document.querySelectorAll('.modal button');
    let activeInputs = document.querySelectorAll('.modal input');
    let activeTextareas = document.querySelectorAll('.modal textarea');

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
    let element = evt.target;

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
