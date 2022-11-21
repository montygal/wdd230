const requestURL = 'scripts/businessdata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject)
    const contributors = jsonObject['contributors'];
    contributors.forEach(displayContributor);
  });

  function displayContributor(contributor) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Business name
    let img = document.createElement('img'); // Picture
    let adr = document.createElement('p'); //  Address
    let phn = document.createElement('p'); // Phone number
   
    h2.textContent      = `${contributor.name}`;
    adr.textContent     = `${contributor.address}`;
    phn.textContent     = `${contributor.phone}`;

    img.setAttribute('src', contributor.image_path);
    img.setAttribute('alt', `${contributor.name}`);

    card.classList.add('card');
    img.classList.add('card-img');

    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(adr);
    card.appendChild(phn);
   
  
    // Add/append the existing HTML div with the cards class with the section(card, list)
    document.querySelector('div.cards').appendChild(card);
  } 

// const cardsButton = document.querySelector(".forcards");
// const listButton  = document.querySelector(".forlists");

// const Cards = document.querySelector(".cards");
// const List  = document.querySelector(".lists");

// const cardsBox  = document.querySelector(".cards");
// const listBox   = document.querySelector(".lists");

// cardsButton.onclick = function(){
//   const cardsBox  = document.querySelector(".cards");
//   const listBox   = document.querySelector(".lists");

//   cardsBox.style.display  = "flex";
//   listBox.style.display   = "none";
// }

// listButton.onclick = function() {
//   const cardsBox  = document.querySelector(".cards");
//   const listBox   = document.querySelector(".lists");

//   cardsBox.style.display  = "none";
//   listBox.style.display   = "block";

// }

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

// if (vw >= 800 && vw < 1000) {
//   cardsBox.style.display  = "none";
//   listBox.style.display   = "block";
// }
