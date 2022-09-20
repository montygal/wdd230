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

// Date{
//     time: 
//     date: 
//     setTimeout()
//}

// let black_cat = new cat()
// black_cat.color = black 
// black_cat.makeANoise()


// class employee {
//     duties: []
//     salary: 
//     name:
//     work(){
//        display every duty  
//     }
// }

// let nefi = new employee()
// nefi.name = "Nefi"
// nefi.salary = "40k"
// nefi.duties = ["tutoring", "dishes"]
// nefi.work()

// let Sariah = new employee()
// Sariah.name = "Sariah"
// Sariah.salary = "1M"
// Sariah.duties = "Amazon CEO "
// Sariah.work()


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