var ArrayPic = document.querySelectorAll("img");
var ArraySource = [];

for (var i = 0; i < 9; i++) {
    ArraySource.push("img/Shf_" + (i + 1) + ".jpg");
}

ArraySource.sort(function (a, b) { return 0.5 - Math.random(); });

for (var i = 0; i < ArrayPic.length; i++) {
    ArrayPic[i].setAttribute("src", ArraySource[i]);
}