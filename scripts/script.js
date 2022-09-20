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

let d = new Date();

let dayName = daynames[d.getDay()];

let monthName = months[d.getMonth()];

let year = d.getFullYear();

let fulldate = dayName + ", " + monthName + ", " + d.getDate() +", " + year;

document.getElementById("currentdate").textContent = fulldate;

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch(e) {
    alert("Error with code or your browser doesn't support Locale");
}