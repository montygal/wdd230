
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