/*Submit button should include:
First name
Email
Phone
3 Selected Fruits
Special Instructions
The Order Date
Total amounts of carbohydrates, protein, fat, sugar and calories*/

let fruitdata=[]
fetch("scripts/fruit.json")
    .then(function(response){
        return response.json()
    })
    .then(function(jsondata){
        fruitdata=jsondata
    })

function handlesubmitform(event){
    event.preventDefault()
    //grab first name
    let firstname=document.getElementById("name").value
    //display first name
    document.getElementById("submittedName").innerHTML = firstname;
    //grab email
    let email=document.getElementById("email").value
    //display email
    document.getElementById("submittedEmail").innerHTML = email;
    //grab phone
    let phone=document.getElementById("phone number").value
    //display phone
    document.getElementById("submittedPhone Number").innerHTML = phonenumber;
    //grab 3 fruits
    //display 3 fruits
    //grab special instructions
    //display special instructions
    //grab order date
    //display order date
    //grab nutrional info
    //display sum of nutritional info
}

document.getElementById("fruit").addEventListener("submit", handlesubmitform)
