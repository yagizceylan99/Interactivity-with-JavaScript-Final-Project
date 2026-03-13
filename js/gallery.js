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

// 1. Yardımcı Fonksiyon: Görünümü Güncelle
function updateDisplay(imageUrl, text) {
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = imageUrl ? `url('${imageUrl}')` : "none";
    displayDiv.textContent = text || "Hover over an image below to display here.";
}

// 2. Ana Fonksiyon: Galeri Başlatıcı
function setupGallery() {
    // Tüm önizleme resimlerini seç
    const images = document.querySelectorAll(".preview");

    // Her resim için gerekli event listener'ları ekle
    images.forEach(img => {
        img.tabIndex = 0;

        // Odaklanma (Focus/MouseOver birleştirilebilir)
        const handleFocus = () => {
            img.style.outline = "5px solid #8e68ff";
            
            updateDisplay(img.src, img.alt);
        };

        // Odaktan Çıkma (Blur/MouseOut birleştirilebilir)
        const handleBlur = () => {
            img.style.outline = "";
            updateDisplay(); // Parametre göndermezsek varsayılana döner
        };

        // Event listener'ları ekle
        img.addEventListener("focus", handleFocus);
        img.addEventListener("blur", handleBlur);
    });
}

// Sayfa hazır olduğunda tek bir yerden başlat
document.addEventListener("DOMContentLoaded", setupGallery);