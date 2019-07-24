
function check() {
    var  string = document.getElementById("name").value;
    string = string.replace(/\d/g, "");
    document.getElementById("name").value = string;
}

