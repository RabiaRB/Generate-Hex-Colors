document.querySelector('#generate').addEventListener('click', generateColor)

function generateColor() {
    
    let red1 = document.querySelector('#redValue1').value;
    let red2 = document.querySelector('#redValue2').value;
    let redHex = red1 + red2;

    let green1 = document.querySelector('#greenValue1').value;
    let green2 = document.querySelector('#greenValue2').value;
    let greenHex = green1 + green2;

    let blue1 = document.querySelector('#blueValue1').value;
    let blue2 = document.querySelector('#blueValue2').value;
    let blueHex = blue1 + blue2;

    let hexColor = redHex + greenHex + blueHex;

    document.querySelector('#shape').style.backgroundColor = `#${hexColor}`;
    document.querySelector('#hexOutput').innerText = `#${hexColor}`;
    document.querySelector('#hexOutput').style.visibility = "visible";


}