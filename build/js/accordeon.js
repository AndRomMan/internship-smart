'use strict';

(function () {
  var navList = document.querySelector('.nav-list');
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
//# sourceMappingURL=accordeon.js.map
