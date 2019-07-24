var variant = 1;
var button = document.getElementById("next");
var first = document.getElementById("circleFirst");
var second = document.getElementById("circleSecond");
var third = document.getElementById("circleThird");

button.onclick = function () {
    switch (variant) {
        case 1: {
            first.style.background = "red";
            second.style.background = "gray";
            third.style.background = "gray";
            break;
        }
        case 2: {
            first.style.background = "gray";
            second.style.background = "yellow";
            third.style.background = "gray";
            break;
        }
        case 3: {
            first.style.background = "gray";
            second.style.background = "gray";
            third.style.background = "green";
            break;
        }
        case 4: {
            first.style.background = "gray";
            second.style.background = "yellow";
            third.style.background = "gray";
            break;
        }
    }
    variant++;
    if (variant === 5) variant = 1;
}
