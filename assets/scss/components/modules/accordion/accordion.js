const accordions = document.querySelectorAll('.accordionWrap');

const resetAccordions = function(identifier){
  let target = document.querySelector(`[data-accordion="${identifier}"]`);
  let children = target.querySelectorAll('.accordion');
  Array.prototype.forEach.call(children, function(child){
    if(child.classList.contains('default') || child.classList.contains('open')){
      child.classList.remove('default');
      child.classList.remove('open');
    }
  });
};

const getChildren = function(accordion){
  let isJsDriven = accordion.getAttribute('data-drivenby');
  if(isJsDriven === 'js'){
    let curChildren = accordion.querySelectorAll('.accordion');

    Array.prototype.forEach.call(curChildren, function(child){
      let curTrigger = child.querySelector('.accordion__header');
  
      curTrigger.addEventListener('click', function(e){
        let allowMultiple = e.target.closest('.accordionWrap').getAttribute('data-allowmultiple');
        if(allowMultiple === 'true'){
          if(e.target.parentNode.classList.contains('default')){
            e.target.parentNode.classList.remove('default');
          }
          e.target.parentNode.classList.toggle('open');
        } else {
          let identifier = e.target.closest('.accordionWrap').getAttribute('data-accordion');
          resetAccordions(identifier);
          e.target.parentNode.classList.toggle('open');
        }
      });
  
      curTrigger.addEventListener('keyup', function(e){
        let allowMultiple = e.target.closest('.accordionWrap').getAttribute('data-allowmultiple');
        if(e.key === 32 || e.keyCode === 32){
          if(allowMultiple === 'true'){
            if(e.target.parentNode.classList.contains('default')){
              e.target.parentNode.classList.remove('default');
            }
            e.target.parentNode.classList.toggle('open');
          } else {
            let identifier = e.target.closest('.accordionWrap').getAttribute('data-accordion');
            resetAccordions(identifier);
            e.target.parentNode.classList.toggle('open');
          }
        }
      });
    });
  }
};

Array.prototype.forEach.call(accordions, function(accordion){
  getChildren(accordion);
});