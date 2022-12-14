

function handlesubmitform(event){
    event.preventDefault()
    //grab first name
    let firstname = document.getElementById("fname").value
    //display first name
    document.getElementById("fname").innerHTML = firstname;
    //grab first name
    let lastname = document.getElementById("lname").value
    //display first name
    document.getElementById("lname").innerHTML = firstname;
    //grab email
    let email = document.getElementById("email").value
    //display email
    document.getElementById("email").innerHTML = email;
    //grab phone
    let phonenumber = document.getElementById("phone_number").value
    //display phone
    document.getElementById("phone_number").innerHTML = phonenumber;
    //grab business
    let business_name = document.getElementById("business_name").value
    //display business name
    document.getElementById("business_name").innterHTML=business_name
    //grab business review
    let review = document.getElementById("business_review").value
    //display business review
    document.getElementById("business_reiew").innterHTML=review

}
document.addEventListener("submit", handlesubmitform)