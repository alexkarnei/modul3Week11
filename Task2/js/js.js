var open = document.getElementById("open");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
open.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}