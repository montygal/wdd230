//const currentDate = newDate();
//const copyright = "&copy";
//const name = "|Sariah E.|Tanner|Utah";
//document.querySelector('#year').innerHTML = copyright.concat(currentDate.getFullYear(), name);
//const lastUpdate = "Last Updated:";
//document.querySelector('#last-update').textContent = lastUpdate.concat(document.lastModified);
//alert(document.lastModified);

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


let d = new Date(document.lastModified);

let dayName = daynames[d.getDay()];

let monthName = months[d.getMonth()];

let year = d.getFullYear();

let fulldate = "Last modified date: " + (d.getMonth() + 1) + "/" + d.getDate()  + "/" + year;

document.getElementById("lastmodifieddate").textContent = fulldate;

//get current date
const date = new Date();

//Grarb the day
let dayOfTheWeek = date.getDay(); 
//If the day is equal to Monday
if (dayOfTheWeek == 1){
    alert("Today is not monday ")
    print('Come join us for the chamber meet on Wednesday\s at 7:00p.m.')
    document.getElementById("monday-banner").classList.remove("hide");

}


let currentDay = daynames[date.getDay()];

let currentMonth = months[date.getMonth()];

let currenYear = date.getFullYear();

let todaysDate = "currentdate: " + (date.getMonth() + 1) + "/" + date.getDate()  + "/" + year;

document.getElementById("currentdate").textContent = todaysDate;


//Find an element with the id of hamburger and save that element in a variable
const hamburger = document.getElementById("hamburger")
//Add an event listener to the element so it triggers a function when 
//The user clicks on the element

function toogleNavigation(){
    //The fuction should do the following: 
        //Find the navigation element and save it in a variable 
        let navigation = document.getElementById("navigation")
        // touggle the "hide" class from this element
        navigation.classList.toggle("hide")
}

hamburger.addEventListener("click", toogleNavigation);

    