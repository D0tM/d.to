import {
  IE
} from './scripts/ieDetect';

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
  const Scripts = (function(){

    const PublicAPI = {};

    PublicAPI.init = function(){
      
    }

    return PublicAPI;
  })();

  Scripts.init();
}