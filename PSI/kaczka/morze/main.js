// x = prompt("Podaj liczbe:")
// var liczba = (x % 7 == 0) ? 'podzielna' : 'niepodzielna'
// document.write(liczba)

// for(let i=1; i<11; i++){
//     document.write("Pętla nr...", i, '<hr>')
// }

// // tablica = [7,5,4,3,2]
// // let suma = 0
// // for (let i = 0; i < tablica.length; i++){
// //     suma += tablica[i]
// // }

// // document.write(suma)

//ZAD1
// function listP() {
//     let tablica = []; 
//     for (let i = 0; i < 5; i++) {
//         let a;
//         a = Math.floor(Math.random() * 100 + 1);
//         tablica.push(a);
//     }
    

//     return tablica;
    
// }

// const result = listP();
// document.write(result)
// let count = 0
// for(i=0;i < result.length; i++){
//     if(result[i] % 3 ==0){
//         count++;
//     }
// }
// document.write('<br>' + count);
function listP() {
    let tablica = []; 
    for (let i = 0; i < 5; i++) {
        let a;
        a = Math.floor(Math.random() * 100 + 1);
        tablica.push(a);
    }
    

    return tablica;
    
}

const result = listP();
document.write(result)
let count = 0
for(i=0;i < result.length; i++){
    if(${result[i]} % 2 ==0){
        count++;
    }
}
document.write('<br>' + count);

