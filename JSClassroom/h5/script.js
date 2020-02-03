var imgArray = document.querySelectorAll("img");

for (var i = 0; i < imgArray.length; i++) {
    imgArray[i].addEventListener("click", addFavorite);
}

function    addFavorite() {
    var img = event.target;
    var imgString = img.getAttribute("src");
    var numbers = imgString.match(/\d+/g).map(Number);
    var fav = document.querySelector("#bl" + numbers);
    for (var i = 1; i < 10; i++) {
        document.querySelector("#bl" + i).classList.remove("fav");
    }
    fav.classList.toggle("fav");
}