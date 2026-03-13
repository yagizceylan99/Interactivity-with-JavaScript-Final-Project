/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Cached image object.
    var imageObject = document.getElementById("image");
    // Change the url for the background image of the div with the id = "image" to the source file of the preview image.
    imageObject.style.backgroundImage = "url('" + previewPic.src + "')";
    //Change the text  of the div with the id = "image" to the alt text of the preview image.
    imageObject.innerHTML = previewPic.alt;
}

function unDo() {
    //  Cached image object
    var imageObject = document.getElementById("image");
    // Update the url for the background image of the div with the id = "image" back to the orginal-image.
    imageObject.style.backgroundColor = "#8e68ff";
    imageObject.style.backgroundImage = "url(' ')";

    // Change the text  of the div with the id = "image" back to the original text.
    imageObject.innerHTML = "Hover over an image below to display here.";
}