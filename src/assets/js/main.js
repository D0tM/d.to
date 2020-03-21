import {
  IE
} from './scripts/ieDetect';

import Siema from './plugins/slider/siema_dev';

const ieVersion = IE;

if (parseInt(ieVersion.actualVersion) < 10) {
  let element = document.createElement('div');
  element.classList.add('ie-notice');
  element.innerHTML = `
    <h1>Your browser is outdated.</h1>
    <p>To enjoy a better web experience, please download a newer browser: <a href="https://bestvpn.org/outdatedbrowser/en">Download</a></p>
  `;
  document.body.insertAdjacentElement('afterbegin', element);
} else {
  const Scripts = (function () {

    const PublicAPI = {};

    PublicAPI.init = function () {
      if(document.body.classList.contains('home')){
        startSliders();
      }
    }

    var startSliders = function(){
      let opts = {
        duration: 500,
        easing: 'ease-out',
        startIndex: 0,
        bullets: true,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      }
      opts.selector = '';
      opts.perPage = {
        480: 1,
        768: 2,
        1024: 3,
      };
      const clientSlider = new Siema(opts);

      const target = document.querySelector(opts.selector);
      const controls = [
        {
          'class': 'prev',
          'content': 'Prev slide',
          'icon': 'chevron-left'
        },
        {
          'class': 'next',
          'content': 'Next slide',
          'icon': 'chevron-right'
        }
      ];
      Array.prototype.forEach.call(controls, (control) => {
        let el = document.createElement('span');
        el.classList.add(control.class);
        el.textContent = control.content;
        el.setAttribute('data-icon', control.icon);
        target.insertAdjacentElement('beforeend', el);
      });

      target.querySelector('.reviews .prev').addEventListener('click', () => reviewSlider.prev());
      target.querySelector('.reviews .next').addEventListener('click', () => reviewSlider.next());

      window.setInterval(function(){
        //clientSlider.next();
      }, 4000);
    }

    return PublicAPI;

  })();

  window.addEventListener('DOMContentLoaded', function(){
    Scripts.init();
  });
}