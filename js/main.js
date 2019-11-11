// const beer = document.querySelector('.beerDiv');

// beer.addEventListener('click', function(){
//     console.log('bruh');
// });

var waypoint = new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      this.element.innerHTML += "<p> added p tag</p>";
    }
  })
