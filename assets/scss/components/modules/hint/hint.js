const hints = document.querySelectorAll('.hintWrap');
if(hints.length > 0){
  Array.prototype.forEach.call(hints, function(hint){
    let isPopOver = hint.getAttribute('data-type');
    if(isPopOver === 'popover'){
      hint.parentElement.addEventListener('click', function(e){
        console.log(e.target.querySelector('.hintWrap'));
        e.target.querySelector('.hintWrap').classList.toggle('active');
      });
    }
  });
}