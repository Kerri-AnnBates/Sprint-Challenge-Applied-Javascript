// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Create elements
    const headerDiv = document.createElement('div'),
    dateEl = document.createElement('span'),
    titleEl = document.createElement('h1'),
    tempEl = document.createElement('span');

    // Add classes
    headerDiv.classList.add('header');
    dateEl.classList.add('date');
    tempEl.classList.add('temp');

    // Set up structures
    dateEl.textContent = 'March 28, 2019';
    headerDiv.appendChild(dateEl);

    titleEl.textContent = 'Lambda Times';
    headerDiv.appendChild(titleEl);

    tempEl.textContent = '98\u00B0';
    headerDiv.appendChild(tempEl);

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

