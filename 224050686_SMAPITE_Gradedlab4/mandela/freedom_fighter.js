var pics = document.getElementById("pics");
var favorites = document.getElementById("favorites");
var actions = document.getElementById("actions");

// gets imagnes fromthe div with id pics
var images = document.querySelectorAll("#pics img");

// add a click event to each picture
for (var i = 0; i < images.length; i++) {
    images[i].style.width = "120px";
    images[i].style.height = "120px";
    images[i].onclick = movePicture;
}

// function to move pictures
function movePicture() {
    // if image is in picture section, move it to favorites
    if (this.parentNode.id === "pics") {
        favorites.appendChild(this);

        var item = document.createElement("li");
        item.textContent = this.getAttribute("src") + " moved to favorites";
        actions.appendChild(item);
    }
    // if image is in favorites, move it back to picture section
    else if (this.parentNode.id === "favorites") {
        pics.appendChild(this);

        var item = document.createElement("li");
        item.textContent = this.getAttribute("src") + " moved back to pictures";
        actions.appendChild(item);
    }
}