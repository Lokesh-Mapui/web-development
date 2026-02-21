// alert("Connected");

// example 1

document.getElementById("changeTextButton").addEventListener("click", function(){
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "TExt has been changed!";
});


// example 2

document.getElementById("highlightFirstcity").addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});


// example 3

document.getElementById("changeOrder").addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor ="blue";
});


// example 4

document.getElementById("addNewElement").addEventListener("click", function(){
    let newItem= document.createElement("li")
    newItem.textContent="Butter";
    document.getElementById("shoppingList").appendChild(newItem)
})


// example 5

document.getElementById("removeLastTask").addEventListener("click", function(){
    let tasklist = document.getElementById("taskList");
    let lasttask = tasklist.lastElementChild.remove();
})


// example 6

document.getElementById("clickMeButton").addEventListener("dblclick", function(){
    alert("chaicode");
});

// example 7

document.getElementById("tealist").addEventListener("click", function(event){
    if (event.target && event.target.matches(".teaItem")) {
        alert("you selected: "+ event.target.textContent);
    }
})


// example 8

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
    feedbackDisplay.style.backgroundColor = "blue";
});


// example 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM Fully loaded";
});


// example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText=document.getElementById("descriptionText");
    descriptionText.classList.add("highlight")
});