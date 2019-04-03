
const setScroll = () => {
  let elements = document.querySelectorAll('.bg-cover');
  let stories = document.querySelectorAll('.story');
  let startPoints = [];
  let logoEnd = document.querySelector('#logo').offsetTop + document.querySelector('#logo').offsetHeight;

  elements.forEach(function(el){ startPoints.push(el.offsetTop); });

  window.addEventListener('scroll', function(){
    y = window.scrollY;
    for(i=0;i<startPoints.length;i++) {
      el = elements[i];
      if(y>startPoints[i]) {
        height = stories[i].offsetHeight;
        if(y<=(startPoints[i]+height)) {
          el.style.position = '';
          el.style.top = '';
        } else {
          el.style.position = 'relative';
          el.style.top = height + 'px';
        }
      } else {
        el.style.position = ''; el.style.top = '';
      }
    }
    if(y>logoEnd) { 
      document.querySelector('.floating-menu').classList.add('colored'); 
    } else {
      document.querySelector('.floating-menu').classList.remove('colored');
    }
  });
}

const setFloatingMenu = () => {
  document.querySelector('#open-menu').addEventListener('click', function(){
    document.querySelector('.floating-menu').classList.add('expand');
  });
  
  document.querySelector('#close-menu').addEventListener('click', function(){
    document.querySelector('.floating-menu').classList.remove('expand');
  });  
}

const setTabNav = () => {
  let navLinks = document.querySelectorAll('.tabs .nav a');
  navLinks.forEach(function(link){
    link.addEventListener('click', function(){
      let lastLink = document.querySelector('.tabs .nav .current');
      lastLink.classList.remove('current');
      this.classList.add('current');
      let tabs = document.querySelectorAll('.tabs .tab');
      tabs.forEach(function(tab){
        tab.classList.add('hide');
      });
      document.getElementById(this.id+'-tab').classList.remove('hide');
    });
  });
}

const setGalleryClick = () => {
  let tns = document.querySelectorAll('.gallery .thumbnails img');
  tns.forEach(function(tn){
    tn.addEventListener('click', function(){
      let display = document.querySelector('.gallery #display');
      display.style.backgroundImage = "url('" + this.src + "')";
    });
  });
}

window.addEventListener('load',function(){
  setScroll();
  setFloatingMenu();
  setTabNav();
  setGalleryClick();
});