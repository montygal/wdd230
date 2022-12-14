
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

//Grab the day
let dayOfTheWeek = date.getDay(); 

let currentDay = daynames[date.getDay()];

let currentMonth = months[date.getMonth()];

let currenYear = date.getFullYear();

let todaysDate = "orderdate: " + (date.getMonth() + 1) + "/" + date.getDate()  + "/" + year;

document.getElementById("orderdate").textContent = todaysDate;