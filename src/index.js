import preloads from './onLoad'
import contents from './contents'

window.addEventListener('load',function(){
  contents().loadPage('about');
  preloads().set();
});