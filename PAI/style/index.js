function change_color(newColor){
    const bg = document.getElementById('color');
    bg.style.background = newColor;
}


function change_font_color(newColor) {
    // Select the element by its ID
    var myElement = document.getElementById("right");

    // Set the font color based on the selected value
    switch (newColor) {
        case "white":
            myElement.style.color = "white";
            break;
        case "tan":
            myElement.style.color = "tan";
            break;
        case "bisque":
            myElement.style.color = "bisque";
            break;
        case "plum":
            myElement.style.color = "plum";
            break;
        default:
            myElement.style.color = "black"; // Default to black if the color is not recognized
    }
}

function change_size() {
    var size = document.getElementById('czcionka').value;
    var myElement = document.getElementById("right");
    myElement.style.fontSize = size;
}