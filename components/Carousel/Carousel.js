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

  
  // setup classes
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  carouselDiv.classList.add('carousel');

  // Add content
  rightButton.textContent = '\u203A';
  leftButton.textContent = '\u2039';

  // Setup structure
  carouselDiv.appendChild(leftButton);
  const images = ['computer.jpeg', 'mountains.jpeg', 'trees.jpeg', 'turntable.jpeg'];
  images.forEach((img, i) => {
    let image = document.createElement('img');
    image.src = `./assets/carousel/${img}`;
    carouselDiv.appendChild(image);
    
  });
  carouselDiv.appendChild(rightButton);

  return carouselDiv;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselComponent());

// Set up functionality for carousel.
const carouselImages = document.querySelectorAll('.carousel img'),
nextBtn = document.querySelector('.right-button'),
prevBtn = document.querySelector('.left-button');

let currIndex = 0;

// Set first image to display: block
carouselImages[currIndex].style.display = 'block';

// Set up next button functionality
nextBtn.addEventListener('click', (e) => {
  currIndex++;
  // console.log(currIndex);
  if (currIndex < carouselImages.length) {
    carouselImages[currIndex].style.display = 'block';
    carouselImages[currIndex - 1].style.display = 'none';
  } else {
    currIndex = 0;
    carouselImages[currIndex].style.display = 'block';
    carouselImages[carouselImages.length-1].style.display = 'none';
  }
});

prevBtn.addEventListener('click', (e) => {
  currIndex--;
  // console.log(currIndex);
  if (currIndex >= 0) {
    carouselImages[currIndex].style.display = 'block';
    carouselImages[currIndex + 1].style.display = 'none';
  } else {
    currIndex = carouselImages.length - 1;
    carouselImages[currIndex].style.display = 'block';
    carouselImages[0].style.display = 'none';
  }
});
