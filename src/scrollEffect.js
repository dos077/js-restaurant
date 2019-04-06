import throttle from 'lodash'

const scrollStories = () => {
  const elements = document.querySelectorAll('.bg-cover');
  const stories = document.querySelectorAll('.story');
  let startPoints = [];

  const findOffset = (el) => {
    let left = 0; let top =0;
    do {
      left += el.offsetLeft;
      top += el.offsetTop;
      el = el.offsetParent;
    } while (el)
    return { left, top }
  }

  const findStarts = () => {
    startPoints = [];
    elements.forEach(function(el){
      startPoints.push(findOffset(el).top);
    });
  }

  const handler = () => {
    const y = window.pageYOffset;
    for(let i=0;i<startPoints.length;i++) {
      let el = elements[i];
      if(y>startPoints[i]) {
        let height = stories[i].offsetHeight;
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
  }

  const throttleHandler = () => {
    throttle(handler, 100);
  }

  const set = () => {
    if(elements) {
      findStarts();
      window.removeEventListener('scroll', throttleHandler);
      window.addEventListener('scroll', throttleHandler);
    }
  }

  return { set }

}

export default scrollStories