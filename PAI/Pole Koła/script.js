function obliczPoleIObwod() {
    // Pobierz wartość promienia z pola input
    var radius = parseFloat(document.getElementById("radiusInput").value);

    if (isNaN(radius)) {
        alert("Wprowadź poprawną liczbę jako promień.");
    } else {
        // Oblicz pole koła
        var pole = Math.PI * Math.pow(radius, 2);
        
        // Oblicz obwód koła
        var obwod = 2 * Math.PI * radius;

        // Wyświetl wynik
        var wynik = "Pole koła: " + pole.toFixed(2) + " jednostek kwadratowych<br>Obwód koła: " + obwod.toFixed(2) + " jednostek";
        document.getElementById("wynik").innerHTML = wynik;
    }
}


function losujLiczbe() {
    var min = 2;
    var max = 12;

    // Wygeneruj losową liczbę zmiennoprzecinkową między 0 a 1
    var losowaLiczba = Math.random();

    // Przeskaluj i przesuń liczbę, aby mieściła się w wybranym zakresie
    var liczbaWZakresie = Math.floor(losowaLiczba * (max - min + 1) + min);

    return liczbaWZakresie;
}

var wylosowanaLiczba = losujLiczbe();
console.log("Wylosowana liczba z zakresu od 2 do 12: " + wylosowanaLiczba);


// Inicjalizacja tablicy
var tablica = [];

// Wypełnij tablicę 25 losowymi liczbami całkowitymi z zakresu od 0 do 10
for (var i = 0; i < 25; i++) {
    var losowaLiczba = Math.floor(Math.random() * 11); // Losuj liczby od 0 do 10
    tablica.push(losowaLiczba);
}

// Wyświetlenie zawartości tablicy
console.log("Tablica z losowymi liczbami od 0 do 10: " + tablica);


// Inicjalizacja liczników dla reszki (0) i orła (1)
var licznikReszka = 0;
var licznikOrzel = 0;

// Powtórz losowanie 100 razy
for (var i = 0; i < 100; i++) {
    // Wylosuj 0 lub 1, gdzie 0 oznacza reszkę, a 1 oznacza orła
    var wynikLosowania = Math.floor(Math.random() * 2);

    // Aktualizuj odpowiedni licznik na podstawie wyniku losowania
    if (wynikLosowania === 0) {
        licznikReszka++;
    } else {
        licznikOrzel++;
    }
}

// Wyświetl wynik
console.log("Liczba reszek (0): " + licznikReszka);
console.log("Liczba orłów (1): " + licznikOrzel);


Symulacja rzutu kostką:  wylosuj 100 liczb ze zbioru 1,2,3,4,5,6. Zlicz, ile razy wystąpiły poszczególne liczby 