import './style.css'

document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
      .then(response => response.json())
      .then(data => generateCards(data))
      .catch(error => console.error('There was an error fetching the data:', error));

  function generateCards(cardsData) {
      const main = document.getElementById("app");

      // Creates a parent container for the cards
      const cardsContainer = document.createElement("div");
      cardsContainer.classList.add("cards-container");

      // This adds the deck title
      const deckHeader = document.createElement("h1");
      deckHeader.textContent = cardsData.deck_heading;
      main.appendChild(deckHeader);
    
      // Loops through the cards data
      cardsData.cards.forEach((cardData) => {
          // Creates individual card element
          const card = document.createElement("figure");
          card.classList.add("card");

          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-container");
          card.append(imageContainer)
          
          const image = document.createElement("img");
          image.src = cardData.image;
          imageContainer.appendChild(image);
          
          const figureCaption = document.createElement("figcaption")
          imageContainer.appendChild(figureCaption)

          const title = document.createElement("h2");
          title.textContent = cardData.title;
          figureCaption.appendChild(title);

          const body = document.createElement("p");
          body.innerHTML = cardData.body;
          figureCaption.appendChild(body);

          const links = document.createElement("div");
          links.classList.add("links");
          cardData.links.forEach(linkData => {
              const link = document.createElement("a");
              link.href = linkData.href;
              link.textContent = linkData.text;
              links.appendChild(link);
          });
          figureCaption.appendChild(links);


          // Appends the card to the cardsContainer
          cardsContainer.appendChild(card);

 
      });

      main.appendChild(cardsContainer);
  }
});
