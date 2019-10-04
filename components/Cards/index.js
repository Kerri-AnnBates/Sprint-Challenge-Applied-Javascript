// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Get data
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const articles = response.data.articles;
        const articleKeys = Object.keys(articles);
        const cardContainer = document.querySelector('.cards-container');

        articleKeys.forEach(key => {
            let topic = articles[key];
            // console.log(topic)
            topic.forEach(item => {
                cardContainer.appendChild(articleComponent(item));
            });
        });
    })
    .catch(err => {
        console.log(`Did not receive data: ${err}`);
    });

// Article component
function articleComponent(article) {
    const cardDiv = document.createElement('div'),
    headlineDiv = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorDiv = document.createElement('div'),
    aurthorSpan = document.createElement('span'),
    authorImg = document.createElement('img');

    // Setup classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    // Setup structure
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    authorDiv.appendChild(aurthorSpan);

    // Add content
    headlineDiv.textContent = article.headline;
    authorImg.src = `${article.authorPhoto}`;
    aurthorSpan.textContent = `By: ${article.authorName}`;

    return cardDiv;
}