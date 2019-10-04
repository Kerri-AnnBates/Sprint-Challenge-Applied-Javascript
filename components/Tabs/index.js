// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Get topics from api
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response);
        const topics = response.data.topics;
        const topicsDiv = document.querySelector('.topics');

        // Add each topic to DOM
        topics.forEach((topic) => {
            topicsDiv.appendChild(tabComponent(topic));
        });
    })
    .catch(error => {
        console.log(`Did not recieve data: ${error}`);
    });

// Tab component
function tabComponent(topic) {
    const tabTopic = document.createElement('div');

    tabTopic.classList.add('tab');
    tabTopic.textContent = topic;
    
    return tabTopic;
}