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
        let select1 = document.getElementById("fruit1")
        let select2 = document.getElementById("fruit2")
        let select3 = document.getElementById("fruit3")
        select1.innerHTML = "";
        select2.innerHTML = "";
        select3.innerHTML = "";
        for(let iFruit = 0; iFruit < fruitdata.length; ++iFruit){
            const newOption = `<option value="${iFruit}" >${fruitdata[iFruit].name}</option>`;
            select1.innerHTML += newOption;
            select2.innerHTML +=newOption;
            select3.innerHTML += newOption;
        }
    })


function handlesubmitform(event){
    event.preventDefault()
    //grab first name
    let firstname = document.getElementById("name").value
    //display first name
    document.getElementById("submittedName").innerHTML = firstname;
    //grab email
    let email = document.getElementById("email").value
    //display email
    document.getElementById("submittedEmail").innerHTML = email;
    //grab phone
    let phonenumber = document.getElementById("phoneNumber").value
    //display phone
    document.getElementById("submittedPhone").innerHTML = phonenumber;
    //grab fruit 1
    let fruit1 = document.getElementById("fruit1").value
    document.getElementById("submittedFruit1").innerHTML = fruitdata[fruit1].name
    //grab fruit 2
    let fruit2 = document.getElementById("fruit2").value
    document.getElementById("submittedFruit2").innerHTML = fruitdata[fruit2].name
    //grab fruit 3
    let fruit3 = document.getElementById("fruit3").value
    document.getElementById("submittedFruit3").innerHTML = fruitdata[fruit3].name
    //grab special instructions
    let special = document.getElementById("special-instructions").value
    //display special instructions
    document.getElementById("submitted-special-instructions").innerHTML = special
    //grab nutrional info
        const fruitData1 = fruitdata[fruit1].nutritions;
        const fruitData2 = fruitdata[fruit2].nutritions;
        const fruitData3 = fruitdata[fruit3].nutritions;

        //Sum of the carbs
        const carbs = fruitData1.carbohydrates + fruitData2.carbohydrates + fruitData3.carbohydrates;

        //Sum of proteins
        const protein = fruitData1.protein + fruitData2.protein + fruitData3.protein;

        //Sum of fats 
        const fat = fruitData1.fat + fruitData2.fat + fruitData3.fat;
        
        //Sum of Calories
        const calories = fruitData1.calories + fruitData2.calories + fruitData3.calories;
        
        //Sum of Sugar
        const sugar = fruitData1.sugar + fruitData2.sugar + fruitData3.sugar;


    //display sum of nutritional info
    document.getElementById("sumOfCarbs").innerHTML = carbs
    document.getElementById("sumOfProtein").innerHTML = protein
    document.getElementById("sumOfFat").innerHTML = fat
    document.getElementById("sumOfCalories").innerHTML = calories
    document.getElementById("sumOfSugar").innerHTML = sugar


 
    
}

document.getElementById("fruit").addEventListener("submit", handlesubmitform)
