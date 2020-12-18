// accordeon.js
'use strict';

(function () {
  // let navList = document.querySelector('.nav-list');
  let navList = document.querySelector('.nav__wrapper');
  let contactsList = document.querySelector('.contacts-list');

  let CLOSE_NAV_LIST = 'nav-list--close';
  let CLOSE_CONTACTS_LIST = 'contacts-list--close';
  let TOGGLE_ICON_ON = 'accordeon-toggle__icon--js';
  let ACCORDEON_TOGGLE_ON = 'accordeon-toggle--js';

  let accordeonNavToggle = document.querySelector('.accordeon-toggle--nav');
  let accordeonContactsToggle = document.querySelector('.accordeon-toggle--contacts');

  let accordeonNavToggleBig = document.querySelector('.accordeon--navigation');
  let accordeonContactsToggleBig = document.querySelector('.accordeon--contacts');

  let accordeonNavToggleIconOpen;
  let accordeonNavToggleIconClose;
  let accordeonContactsToggleIconOpen;
  let accordeonContactsToggleIconClose;

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

  window.accordeon = {
    // activatingAccordeon,
  };
})();
