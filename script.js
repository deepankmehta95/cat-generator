// Function to generate new cat
function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "cat.jpg";
    div.appendChild(image);
}