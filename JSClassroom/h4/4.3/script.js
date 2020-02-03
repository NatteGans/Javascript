var topImg = document.querySelector("#top");
var midImg = document.querySelector("#mid");
var bottomImg = document.querySelector("#bottom");
var indexTop = 0;
var indexMid = 0;
var indexBottom = 0;


topImg.addEventListener("click", changeImageTop);
midImg.addEventListener("click", changeImageMid);
bottomImg.addEventListener("click", changeImageBottom);

function changeImageTop() {
    if (indexTop < 4) {
        indexTop++;
    } else {
        indexTop = 1;
    }
    topImg.setAttribute("src", "img/img" + indexTop + "_top.jpg");
}

function changeImageMid() {
    if (indexMid < 4) {
        indexMid++;
    } else {
        indexMid = 1;
    }
    midImg.setAttribute("src", "img/img" + indexMid + "_mid.jpg");
}

function changeImageBottom() {
    if (indexBottom < 4) {
        indexBottom++;
    } else {
        indexBottom = 1;
    }
    bottomImg.setAttribute("src", "img/img" + indexBottom + "_bottom.jpg");
}