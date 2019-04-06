import contents from "./contents";

const clickMenu = () => {

  const menuButton = () => {
    document.querySelector('#open-menu').addEventListener('click', function(){
      document.querySelector('.floating-menu').classList.add('expand');
    });
    
    document.querySelector('#close-menu').addEventListener('click', function(){
      document.querySelector('.floating-menu').classList.remove('expand');
    });
  }

  const addLink = () => {
    const links = document.querySelectorAll('.page-link');
    links.forEach(function(link){
      link.addEventListener('click', function(){
        contents().loadPage(this.id);
        document.querySelector('.floating-menu').classList.remove('expand');
      })
    });
  }

  const set = () => {
    menuButton();
    addLink();
  }

  return { set }

}

export default clickMenu;