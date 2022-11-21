const requestURL = 'https://raw.githubusercontent.com/montygal/chamber/busimages/data.js';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const contributors = jsonObject['contributors'];
    contributors.forEach(displayContributors);
  });

  function displayContributors(contributors) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    
    // Change the textContent property of the h2 element to contain the headings/paragraphs
    let h2 = document.createElement('h2');    
    let img = document.createElement('img');
    let adr = document.createElement('p');
    let phn = document.createElement('p');
    let li = document.createElement('section');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    let listH2          = document.createElement('h2');    
    let listAdr         = document.createElement('p');
    let listPhn         = document.createElement('p');
    h2.textContent      = `${contributors.name} ${contributors.lastname}`;
    adr.textContent     = `${contributors.address}`;
    phn.textContent     = `${contributors``.phone}`;
    listH2.textContent  = `${contributors.name} ${contributors.lastname}`;
    listAdr.textContent = `${contributors.address}`;
    listPhn.textContent = `${contributors.phone}`;
    img.setAttribute('src', contributors.imageurl);
    img.setAttribute('alt', `${contributors.name} ${contributors.lastname} ${contributors.order}`);

    card.classList.add('card');
    img.classList.add('card-img');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(adr);
    card.appendChild(phn);
    card.appendChild(img);
    li.appendChild(listH2);
    li.appendChild(listAdr);
    li.appendChild(listPhn);

    // Add/append the existing HTML div with the cards class with the section(card, list)
    document.querySelector('div.cards').appendChild(card);
    document.querySelector('div.list').appendChild(li);
  } 

const cardsButton = document.querySelector(".forcards");
const listButton  = document.querySelector(".forlists");

const Cards = document.querySelector(".cards");
const List  = document.querySelector(".lists");

const cardsBox  = document.querySelector(".cards");
const listBox   = document.querySelector(".lists");

cardsButton.onclick = function(){
  const cardsBox  = document.querySelector(".cards");
  const listBox   = document.querySelector(".lists");

  cardsBox.style.display  = "flex";
  listBox.style.display   = "none";
}

listButton.onclick = function() {
  const cardsBox  = document.querySelector(".cards");
  const listBox   = document.querySelector(".lists");

  cardsBox.style.display  = "none";
  listBox.style.display   = "block";

}

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if (vw >= 800 && vw < 1000) {
  cardsBox.style.display  = "none";
  listBox.style.display   = "block";
}
