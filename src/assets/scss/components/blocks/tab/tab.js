const labels = document.querySelectorAll('.tab__label');
if(labels.length > 0){
  Array.prototype.forEach.call(labels, function(label){
    label.addEventListener('click', function(e){
      setActiveState(e.target);
    });
    label.addEventListener('keyup', function(e){
      if(e.key === 32 || e.keyCode === 32){
        setActiveState(e.target);
      }
    });
  });
}

function resetActiveState(curTabSet){
  Array.prototype.forEach.call(curTabSet, function(tabLabel){
    tabLabel.classList.remove('active');
    tabLabel.setAttribute('aria-selected', 'false');
  });
}

function setActiveState(curTarget){
  let target = curTarget.getAttribute('data-target');
  let parentTab = curTarget.closest('.tab');
  let curTabSet = parentTab.querySelectorAll('.tab__label');
  resetActiveState(curTabSet);
  curTarget.classList.add('active');
  curTarget.setAttribute('aria-selected', 'true');
  parentTab.querySelector('#' + target).click();
}