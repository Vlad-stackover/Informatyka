function openPage(page){
    window.open(page);
}

function size(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    alert('Rozmiar okna: ' + height + ' x ' + width);
}

function url(){
    let url = document.URL;
    document.getElementById("demo").innerHTML = url;
}

function showTitle() {
    let pageTitle = document.title;
    document.getElementById("four").innerHTML = pageTitle;
}

function mod(){
    let mod = document.lastModified;
    document.getElementById("five").innerHTML = mod;
}
function submitForm(event) {
    event.preventDefault();

    const inputValue = document.getElementById("inputValue").value;
    const inputValue2 = document.getElementById("inputValue2").value;

    alert("Pole prostokąta " + (inputValue * inputValue2));
}

function updateDateTime() {
    
    const now = new Date();

    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  setInterval(updateDateTime, 1000);

function wstecz(){
    history.back();
}
function dalej(){
    history.forward();
}


function host(){
    let host = location.hostname;
    document.getElementById("nine").innerHTML = "Hostname:" + host;
}
function prot(){
    let prot = location.protoco;
    document.getElementById("ten").innerHTML = "Port:" + prot;
}
    
function port(){
    let port = locatio.port;
    document.getElementById("eleven").innerHTML = "Port" + port;
}