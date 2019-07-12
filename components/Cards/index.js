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
    populateArticles(result.data.articles);
  })
  .catch(error => {
    // Handles failure:
    console.log("Error", error);
  });

function Card(articleHeadline, authorPhoto, authorName) {
  // create DOM elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byline = document.createElement("span");

  // add classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // populate article content
  headline.textContent = articleHeadline;
  img.src = authorPhoto;
  byline.textContent = authorName;

  // assemble elements
  card.append(headline, author);
  author.append(imgContainer, byline);
  imgContainer.append(img);

  return card;
}
function populateArticles(articlesData) {
  // convert the object to an array
  const articlesArray = Object.values(articlesData);

  articlesArray.forEach(articles => {
    articles.forEach(article => {
      const card = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      document.querySelector(".cards-container").append(card);
    });
  });
}
