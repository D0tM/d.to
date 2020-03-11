const wizard = document.querySelector('.wizard');
const steps = wizard.querySelectorAll('.list__item');
const groups = wizard.querySelectorAll('.form__group');
const controls = wizard.querySelectorAll('.button[data-action]');
let curSlide = 0;
let end = false;

function initSteps(){
  Array.prototype.forEach.call(steps, function(step){
    step.addEventListener('click', function(e){
      let curStep = e.target.getAttribute('data-step').trim();
      reset();
      curSlide = parseInt(curStep);
      changeSlide();
    });
  });
}

function initControls(){
  Array.prototype.forEach.call(controls, function(control){
    control.addEventListener('click', function(e){
      let action = e.target.getAttribute('data-action').trim();
      if(action === 'next'){
        next();
      } else if(action == 'prev'){
        prev();
      }
    });
  });
}

function changeSlide(){
  //Remove active to every element
  reset();
  //Adds active to the right panel and step
  steps[curSlide].classList.add('active');
  groups[curSlide].classList.add('active');
  //Show and hide prev and next buttons
  if(curSlide === 0){
    controls[0].setAttribute('disabled', 'true');
  }
  if(curSlide === groups.length -1){
    controls[1].setAttribute('disabled', 'true');
  }
  if(curSlide > 0){
    controls[0].removeAttribute('disabled');
  }
  if(curSlide < groups.length -1){
    controls[1].removeAttribute('disabled');
  }
}

function reset(){
  Array.prototype.forEach.call(steps, function(step){
    step.classList.remove('active');
  });
  Array.prototype.forEach.call(groups, function(group){
    group.classList.remove('active');
  });
}

function next(){
  curSlide += 1;
  if(curSlide > groups.length - 1) curSlide = groups.length - 1;
  changeSlide();
}
function prev(){
  curSlide -= 1;
  if(curSlide < 0) curSlide = 0;
  changeSlide();
}

(function(){
  initSteps();
  initControls();
})();