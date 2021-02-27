const triggers = document.querySelectorAll('[data-modal]');

Array.prototype.forEach.call(triggers, function(trigger){
  trigger.addEventListener('click', function(e){
    let target = e.target.getAttribute('data-modal').trim();
    let selectedTarget = document.querySelector('#' + target);
    let isDrivenBy = selectedTarget.parentNode.getAttribute('data-drivenby').trim();
    if(isDrivenBy === 'js'){
      setAria(selectedTarget);
      toggleActive(selectedTarget.parentNode);
    } else {
      setAria(selectedTarget);
    }
  });
});

function setAria(curTarget){
  curTarget.setAttribute('aria-modal', 'true');
}
function toggleActive(curTarget){
  curTarget.classList.toggle('active');
};
function hideOnClickOutside(target){
  let curTarget = document.querySelector('#' + target);
  let hasListener = curTarget.getAttribute('data-listener');
  if(hasListener === null){
    curTarget.addEventListener('click', function(e){
      if (!e.target.closest('.modalWrap')) return;
      toggleActive(e.target.parentNode);
    }, false);
  }
}