var expectedBox = document.getElementById("expected");
var actualBox = document.getElementById("actual");
var compareBtn = document.getElementById("compare-btn");
var clearBtn = document.getElementById("clear-btn");
var result = document.getElementById("result");

// clear old results
function clearResults() {
    result.innerHTML = "";
    result.className = "";
}


compareBtn.onclick = function () {

    clearResults();

    // get text from both textareas
    var expectedText = expectedBox.value;
    var actualText = actualBox.value;

    // check if both textareas are empty
    if (expectedText.trim() === "" && actualText.trim() === "") {
        var emptyMessage = document.createElement("li");
        emptyMessage.textContent = "Please enter text in both text areas.";
        result.appendChild(emptyMessage);
        return;
    }


    var expectedLines = expectedText.split("\n");
    var actualLines = actualText.split("\n");

    // create the ordered list for differences
    var differencesList = document.createElement("ol");
    differencesList.id = "differences";

    var hasDifference = false;

    // check if number of lines is different
    if (expectedLines.length !== actualLines.length) {
        hasDifference = true;

        var lineMessage = document.createElement("li");
        lineMessage.textContent =
            "Number of lines differs. Expected: " +
            expectedLines.length +
            ", Actual: " +
            actualLines.length;
        differencesList.appendChild(lineMessage);
    }

    // find the bigger number of lines
    var maxLines = expectedLines.length;
    if (actualLines.length > maxLines) {
        maxLines = actualLines.length;
    }

    // compare the lines one by one
    for (var i = 0; i < maxLines; i++) {
        var expectedLine = "";
        var actualLine = "";

        if (i < expectedLines.length) {
            expectedLine = expectedLines[i];
        }

        if (i < actualLines.length) {
            actualLine = actualLines[i];
        }

        // if lines are not the same then add a difference
        if (expectedLine !== actualLine) {
            hasDifference = true;

            var diffItem = document.createElement("li");
            diffItem.textContent =
                "Line " + (i + 1) +
                " is different. Expected: " + expectedLine +
                " | Actual: " + actualLine;
            differencesList.appendChild(diffItem);
        }
    }


    if (hasDifference) {
        result.className = "change";

        var topMessage = document.createElement("li");
        topMessage.textContent = "Texts are different";
        result.appendChild(topMessage);

        result.appendChild(differencesList);
    } else {
        result.className = "nochange";

        var noDiff = document.createElement("li");
        noDiff.textContent = "No differences found";
        result.appendChild(noDiff);
    }
};


clearBtn.onclick = function () {
   
    expectedBox.value = "";
    actualBox.value = "";

    clearResults();
};