console.log("Hello World")

function zad1(a, b, c) {
    if ((a ** 2) + (b ** 2) === (c ** 2)) {
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else if ((a ** 2) + (c ** 2) === (b ** 2)){
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else if ((b ** 2) + (a ** 2) === (c ** 2)){
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else if ((b ** 2) + (c ** 2) === (a ** 2)){
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else if ((c ** 2) + (a ** 2) === (b ** 2)){
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else if ((c ** 2) + (b ** 2) === (a ** 2)){
        console.log("Podane liczby tworzą trójkę pitagorejską");
    } else {
        console.log("Podane liczby nie tworzą trójki pitagorejskiej");
    }
}

function zad2(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

function zad3(a) {

}