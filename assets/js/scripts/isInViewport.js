/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */

export const isInViewport = function (elem) {

  var distance = document.querySelector(elem).getBoundingClientRect();

  document.addEventListener('scroll', function () {
    if (distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        var revealEvent = document.createEvent('reveal');
        revealEvent.initEvent('reveal', true, true);
        event.target.dispatchEvent('reveal');
    }

  });
};