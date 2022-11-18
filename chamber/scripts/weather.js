const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');
const apiURL='https://api.openweathermap.org/data/2.5/weather?q=A0A&units=imperial&APPID=ce3ac5b533f9c34cc23975fa9d566bf8';

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
  
  function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

  }

  function displayResults(data){
    temperature.textContent = data.main.temp.toFixed(0);
    description.textContent = capitalize(data.weather[0].description);
    caption.textContent = data.weather[0].description;
    weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  }