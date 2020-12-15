// smooth-scroll.js
'use strict';

(function () {
  // console.log(window.smoothScrollPolyfill.polyfill);

  let scrollCallbackLink = document.querySelector('.promo__callback-link');
  let scrollAdvantagesLink = document.querySelector('.promo__advantages-link');
  let callbackAnchor = document.querySelector('#callback');
  let advantagesAnchor = document.querySelector('#advantages');

  function linkToCallbackClickHandler(evt) {
    evt.preventDefault();
    callbackAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  function linkToAdvantagesClickHandler(evt) {
    evt.preventDefault();
    advantagesAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  if (scrollCallbackLink && scrollCallbackLink) {
    scrollCallbackLink.addEventListener('click', linkToCallbackClickHandler);
  }

  if (scrollAdvantagesLink && advantagesAnchor) {
    scrollAdvantagesLink.addEventListener('click', linkToAdvantagesClickHandler);
  }
})();
