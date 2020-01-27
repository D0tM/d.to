import IE from './scripts/ieDetect';

let ieVersion = IE;

if(ieVersion <= 10){
  let element = document.createElement('div');
  element.classList.add('ie-block');
  element.innerHTML = `
    <h1>Your browser is outdated.</h1>
    <p>To enjoy a better web experience, please download a newer browser: <a href="https://bestvpn.org/outdatedbrowser/en">Download</a></p>
  `;
  document.body.insertAdjacentElement('afterbegin', element);
  return;
}