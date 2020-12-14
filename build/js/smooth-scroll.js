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
//# sourceMappingURL=smooth-scroll.js.map
