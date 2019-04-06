import scrollStories from './scrollEffect'
import linkTabs from './tabEffect'
import clickMenu from './menuEffect'
import clickGallery from './galleryEffect'
import throttle from 'lodash'

const preloads = () => {

  const watchContent = () => {
    let content = document.getElementById('content');
    let config = { attributes: false, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      for(let mutation of mutationList) {
        if(mutation.type == 'childList') {
          scrollStories().set();
          linkTabs().set();
          clickGallery().set();
        }
      }
    }
    let observer = new MutationObserver(callback);
    observer.observe(content, config);
  }

  const watchResize = () => {
    const throttleHandler = () => { throttle(scrollStories().set, 100); }
    window.addEventListener('resize', throttleHandler);
  }

  const set = () => {
    clickMenu().set();
    watchContent();
    watchResize();
  }
  return { set }
}

export default preloads;