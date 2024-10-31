function changeTextSize(){
    const fontSize = document.getElementById('slider').value;
    document.getElementById('tekst').style.fontSize = fontSize + 'px';
}
function changeBg(){
    let r = document.getElementById('R').value;
    let g = document.getElementById('G').value;
    let b = document.getElementById('B').value;

    document.getElementById('zad2').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}



const ramkaSelect = document.getElementById('ramka');
const obramowanyText = document.getElementById('obramowany');


function updateBorderStyle() {
    const selectedBorderStyle = ramkaSelect.value;
    obramowanyText.style.border = selectedBorderStyle === 'none' ? 'none' : `2px ${selectedBorderStyle} black`;
}

ramkaSelect.addEventListener('change', updateBorderStyle);