
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

let fulldate = "Last visited date: " + (d.getMonth() + 1) + "/" + d.getDate()  + "/" + year;

document.getElementById("lastvisiteddate").textContent = fulldate;