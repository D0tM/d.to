const rating = document.querySelector('.rating');
const items = rating.querySelectorAll('.rating__item');
const nodes = Array.prototype.slice.call(rating.children);
function initRating(){
  Array.prototype.forEach.call(items, function(item){
    item.addEventListener('mouseenter', function(e){
      enlightStarsOnHover(e.target)
    });
    item.addEventListener('click', function(e){
      enlightStar(e.target);
      if(rating.querySelector('.rating__item').getAttribute('data-listener')){
        resetListeners();
      }
    });
  });
}
function enlightStarsOnHover(curTarget){
  curTarget.setAttribute('data-listener', 'mouseenter');
  let curIndex = nodes.indexOf( curTarget );
  setActive(curIndex);
}
function enlightStar(curTarget){
  let curIndex = nodes.indexOf( curTarget );
  setActive(curIndex);
}
function setActive(index){
  resetRating();
  for(let i = 0; i <= index; i += 1){
    items[i].classList.add('active');
  }
};
function resetRating(){
  Array.prototype.forEach.call(items, function(item){
    item.classList.remove('active');
  });
}
function resetListeners(){
  Array.prototype.forEach.call(items, function(item){
    item.removeEventListener('mouseenter', enlightStarsOnHover, false);
  });
}
initRating();