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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(result => {
    console.log(result)
    document.querySelector('.cards-container').append(Card(result.data.articles))
    // result.data.topics.forEach(topic => {
    //   const div = document.createElement("div");
    //   div.classList.add("tab");
    //   div.textContent = topic;
    //   document.querySelector(".topics").append(div);
    // });
  })
  .catch(error => {
    // Handles failure:
    console.log("Error", error);
  });

  function Card(articles) {
    console.log(articles)

    // create DOM elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const byline = document.createElement('span')
  }
