const linkTabs = () => {
  const navLinks = document.querySelectorAll('.tabs .nav a');

  const set = () => {
    if(navLinks) {
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
  }

  return { set }
}

export default linkTabs;