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
    for (let i = 1; i <= a; i++) {
        let row = '';
        for (let j = 1; j <= a; j++) {
            row += i * j + '\t';
        }
        console.log(row);
    }
}

function zad4(a) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    console.log('Ciąg Fibonacciego: ')

    for (let i = 1; i <= a; i++) {
        console.log(n1);

        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

function zad5(a) {
    let string = '';

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= i; j++ ) {
            string += '*';
        }
        string += '\n';
    }

    console.log(string);
}

function zad6(a) {
    let string = "";

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a - i; j++) {
            string += "*";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (k === 0 || k === 2 * i - 2 || i === a) {
                string += "*";
            } else {
                string += " ";
            }
        }
        for (let j = 1; j <= a - i; j++) {
            string += "*";
        }
        string += "\n";
    }

    console.log(string);
}

function zad7() {
    let figura = prompt("Wybierz figure (prostokat, trapez, rownloeglobok, trojkat):")
    switch (figura) {
        case "prostokat":
            poleProstokata();
        case 'trapez':
            poleTrapezu();
        case 'rownoleglobok':
            poleRownolegloboku();
        case 'trojkat':
            poleTrojkata();
        default:
            return alert('Nieznana figura');
    }
}

function poleProstokata() {
    alert("Podaj długości boków A i B:");

    let userA = prompt("Podaj A:");
    let userB = prompt("Podaj B:")
    let numberA = parseFloat(userA);
    let numberB = parseFloat(userB);
    let poleProstokata = userA * userB;

    alert("Pole: " + poleProstokata);
}

function poleTrapezu(a, b, h) {
    alert("Podaj długości podstaw A, B i wysokość H:");

    let userA = prompt("Podaj A:");
    let userB = prompt("Podaj B:");
    let userH = prompt("Podaj H:");
    let numberA = parseFloat(userA);
    let numberB = parseFloat(userB);
    let numberH = parseFloat(userH);
    let poleTrapezu = ((userA + userB) * userH) / 2;

    alert("Pole: " + poleTrapezu);
}

function poleRownolegloboku(a, h) {
    alert("Podaj długości A i wysokość H:");

    let userA = prompt("Podaj A:");
    let userH = prompt("Podaj H:");
    let numberA = parseFloat(userA);
    let numberH = parseFloat(userH);
    let poleRownolegloboku = userA * userH;

    alert("Pole: " + poleRownolegloboku);
}

function poleTrojkata() {
    alert("Podaj długości A i wysokość H:");

    let userA = prompt("Podaj A:");
    let userH = prompt("Podaj H:");
    let numberA = parseFloat(userA);
    let numberH = parseFloat(userH);
    let poleTrojkata = (userA * userH)/2;

    alert("Pole: " + poleTrojkata);
}


const figury = {
    prostokat: (a, b) => a * b,
    trapez: (a, b, h) => ((a + b) / 2) * h,
    rownoleglobok: (a, h) => a * h,
    trojkat: (a, h) => (a * h) / 2
};

function zad8(figura, param) {
    const pole = figury[figura];
    if (pole) {
        console.log(pole(...Object.values(param)));
    } else {
        console.log('Nieznana figura');
    }
}

function zad9(a) {
    const wNewtona = (n, k) => {
        let wynik = 1;
        for (let i = 1; i <= k; i++) {
            wynik *= (n - i + 1) / i;
        }
        return wynik;
    };

    for (let i = 0; i < a; i++) {
        let w = '';
        for (let j = 0; j <= i; j++) {
            w += wNewtona(i, j) + ' ';
        }
        console.log(w);
    }
}

function zad10(banned, zdanie) {
    let word = zdanie.split(' ');
    let bannedWords = [];

    for (let w of word) {
        if (banned.includes(w)) {
            bannedWords.push('*'.repeat(w.length));
        } else {
            bannedWords.push(w);
        }
    }
    console.log(bannedWords.join(' '));
}