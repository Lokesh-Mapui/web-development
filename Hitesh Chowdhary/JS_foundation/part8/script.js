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