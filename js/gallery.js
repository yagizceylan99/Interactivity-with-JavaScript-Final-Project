/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Cached image object.
    var imageObject = document.getElementById("image");
    // Change the url for the background image of the div with the id = "image" to the source file of the preview image.
    imageObject.style.backgroundImage = "url('" + previewPic.src + "')";
    //Change the text  of the div with the id = "image" to the alt text of the preview image.
    imageObject.innerHTML = previewPic.alt;
    // Change the opacity of the div with the id = "image" to 1.0 to make the background image visible.
    imageObject.style.opacity = "1.0";
}

function unDo() {
    //  Cached image object
    var imageObject = document.getElementById("image");
    // Update the url for the background image of the div with the id = "image" back to the orginal-image.
    imageObject.style.backgroundColor = "#8e68ff";
    // Change the url for the background image of the div with the id = "image" back to the original image.
    imageObject.style.backgroundImage = "url(' ')";
    // Change the text  of the div with the id = "image" back to the original text.
    imageObject.innerHTML = "Hover over an image below to display here.";
    // Change the opacity of the div with the id = "image" back to 0.5 to make the background image invisible.
    imageObject.style.opacity = "0.5";
}

// 1. Helper Function: Update Display
function updateDisplay(imageUrl, text) {
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = imageUrl ? `url('${imageUrl}')` : "none";
    displayDiv.innerHTML = text ? text : "Hover over an image below to display here.";
}

// 2. Main Function: Gallery Initializer
function setupGallery() {
    // Choose all elements with the class "preview" and assign them to a variable.
    const images = document.querySelectorAll(".preview");
    console.log("Galeri başlatıldı, " + images.length + " adet resim bulundu."); // Control for image selection
    alert("Galeri başlatıldı, " + images.length + " adet resim bulundu."); // User feedback for gallery initialization
    // Loop through each image and add event listeners for focus and blur (or mouseover and mouseout).
    images.forEach(img => {
        img.tabIndex = 0;

        const handleFocus = () => {
            console.log("Event tetiklendi: Focus/MouseOver -> " + img.alt); // Control for focus/mouseover event
            img.style.outline = "5px solid #8e68ff";
            img.style.opacity = "1.0";
            updateDisplay(img.src, img.alt);
        };

        const handleBlur = () => {
            console.log("Event tetiklendi: Blur/MouseOut"); // Control for blur/mouseout event
            img.style.outline = "";
            img.style.opacity = "0.5";
            updateDisplay(); // If called without arguments, it will reset to default state.
        };

        // Add both event listeners to each image.
        img.addEventListener("focus", handleFocus);
        img.addEventListener("blur", handleBlur);
    });
}

// Call setupGallery when the window loads to ensure all elements are available.
window.addEventListener("load", setupGallery);