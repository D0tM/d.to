const rating = document.querySelector('.rating');
const items = rating.querySelectorAll('.rating__item');
const nodes = Array.prototype.slice.call(rating.children);
let enlightOnHover = true;

function initRating(){
  Array.prototype.forEach.call(items, function(item){
    item.addEventListener('mouseenter', function(e){
      if(enlightOnHover){
        enlightStarsOnHover(e.target);
      }
    });
  });
  Array.prototype.forEach.call(items, function(item){
    item.addEventListener('click', function(e){
      enlightStar(e.target);
      enlightOnHover = false;
    });
  });
}

function enlightStarsOnHover(curTarget){
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
}

function resetRating(){
  Array.prototype.forEach.call(items, function(item){
    item.classList.remove('active');
  });
}

initRating();