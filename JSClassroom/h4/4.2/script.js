var img = document.querySelector("img");
var index = 1;

img.addEventListener("click", changeImage);

function changeImage() {
    if (index < 4) {
        index++;
    } else {
        index = 1;
    }
    img.setAttribute("src", "img/img_" + index + ".jpg");
}