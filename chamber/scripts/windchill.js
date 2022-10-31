const temp = 50
const wind = 4

function calculateWindChill(temp, wind){
    return 35.74 + (0.6215 * temp)  - Math.pow((35.75 * wind), .16) + Math.pow((.4275 * wind * temp), .16)
}


//console.log(calculateWindChill(temp, wind));
const windChill = calculateWindChill(temp, wind)
document.getElementById("windchill").textContent=windChill

