/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent() {
  const carouselDiv = document.createElement('div'),
  leftButton = document.createElement('div'),
  rightButton = document.createElement('div');
  let image = document.createElement('img');

  
  // setup classes
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  carouselDiv.classList.add('carousel');

  // Add content
  rightButton.textContent = '\u203A';
  leftButton.textContent = '\u2039';

  // Setup structure
  const images = ['computer.jpeg', 'mountains.jpeg', 'trees.jpeg', 'turntable.jpeg'];
  images.forEach(img => {
    image = document.createElement('img');
    image.src = `./assets/carousel/${img}`;
    carouselDiv.appendChild(leftButton);
    carouselDiv.appendChild(image);
    carouselDiv.appendChild(rightButton);
  });

  currentImg = 0;

  
  return carouselDiv;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselComponent());