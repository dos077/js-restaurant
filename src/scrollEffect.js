const setScroll = () => {
  var elements = document.querySelectorAll('.bg-cover');
  _.each(elements, function(element){
    console.log(element.offsetTop);
    console.log(element.offsetHeight);
  });
}

export default setScroll