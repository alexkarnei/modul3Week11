var li = document.querySelectorAll("#rules li");

for (var i = 0, len = li.length; i < len; i++) {
    li[i].onclick = function () {
        this.style.background = "orange";
    }
}
