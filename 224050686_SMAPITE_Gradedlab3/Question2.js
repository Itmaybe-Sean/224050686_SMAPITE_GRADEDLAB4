let removedCount = 0;

let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");
let itemInput = document.getElementById("item");
let list = document.getElementById("list");
let removedItemsDiv = document.getElementById("removed-items");
let removedCountDiv = document.getElementById("removed-count");

addButton.addEventListener("click", function () {
    // Get the text from the input
    let inputText = itemInput.value.trim();

    // Make sure the iinput has input
    if (inputText !== "") {
        let li = document.createElement("li");
        li.textContent = inputText;
        list.appendChild(li);

        // 
        updateListColors();
    }

    // Clear the textbox after clicking Add
    itemInput.value = "";
});

removeButton.addEventListener("click", function () {
    
    let inputText = itemInput.value.trim().toLowerCase();

    let items = list.getElementsByTagName("li");
    let removedItem = null;

    // Look 
    for (let i = 0; i < items.length; i++) {
        
        if (items[i].textContent.toLowerCase() === inputText) {
            removedItem = items[i].textContent;

            // Remove only one matching item in the list
            list.removeChild(items[i]);

            removedCount++;
            break;
        }
    }

    // If something was removed, show it below
    if (removedItem !== null) {
        removedItemsDiv.textContent = removedItem;
        removedItemsDiv.style.color = "red";
        removedItemsDiv.style.fontWeight = "bold";

        if (removedCount === 1) {
            removedCountDiv.textContent = "(" + removedCount + ") item removed";
        } else {
            removedCountDiv.textContent = "(" + removedCount + ") items removed";
        }

        removedCountDiv.style.color = "green";
        removedCountDiv.style.fontWeight = "bold";

        // Fix the list colours after removing
        updateListColors();
    }

    // Clear the textbox after clickingthe Remove button
    itemInput.value = "";
});

function updateListColors() {
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
            items[i].style.backgroundColor = "white";
        } else {
            items[i].style.backgroundColor = "yellow";
        }
    }
}
