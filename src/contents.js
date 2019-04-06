import about from './about.yaml';
import menu from './menu.yaml'
import drinks from './drinks.yaml'
import reservations from './reservations.yaml'
import privateDinning from './private.yaml'
import gallery from './gallery.yaml'

const contents = () => {

  const pages = {}
  pages['about'] =  about;
  pages['menu'] = menu;
  pages['drinks'] = drinks;
  pages['reservations'] = reservations;
  pages['privateDinning'] = privateDinning;
  pages['gallery'] = gallery

  const reset = () => {
    document.getElementById('content').innerHTML = '<div class="right-border"></div><div class="left-border"></div><div class="fade-out"></div><div class="fade-in" ></div>';
  }

  const createHtml = (source) => {
    let root;
    if(source.type == 'root') {
      root = document.getElementById('content');
    } else {
      root = document.createElement(source.type);
    }
    if(source.id) {root.id = source.id; }
    if(source.class) { 
      source.class.forEach( function(c) {
        root.classList.add(c);
      });
    }
    if(source.style) { root.style = source.style; }
    if(source.content) { root.innerHTML = source.content; }
    if(source.src) { root.src = source.src }
    if(source.children) {
      source.children.forEach( function(child){
        root.append(createHtml(child));
      });
    }
    return root;
  }

  const loadPage = (which) => {
    const source = pages[which];
    if(source){
      reset();
      document.title = `${which} | Freemans`;
      createHtml(source);
    }
    
  }

  return { reset, loadPage }
}

export default contents;