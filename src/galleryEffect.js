const clickGallery = () => {
  const tns = document.querySelectorAll('.gallery .thumbnails img');

  const set = () => {
    if(tns) {
      tns.forEach(function(tn){
        tn.addEventListener('click', function(){
          let display = document.querySelector('.gallery #display');
          display.style.backgroundImage = "url('" + this.src + "')";
        });
      });
    }
  }

  return { set }
}

export default clickGallery;