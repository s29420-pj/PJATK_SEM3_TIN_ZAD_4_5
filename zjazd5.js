// ZAD 11
class Auto {
    constructor(year, course, startPrice, endPrice) {
        this.year = year;
        this.course = course;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
    }

    increaseStartPrice() {
        this.startPrice += 1000;
    }

    decreaseEndPriceByYear() {
        const now = new Date();
        const currentYear = now.getFullYear();
        this.endPrice -= (currentYear - this.year) * 1000;
    }

    decreaseEndPriceByCourse() {
        this.endPrice -= Math.floor((this.course / 100000)) * 10000;
    }

    addCourseAndYear(newCourse, newYear) {
        this.course = newCourse;
        this.year = newYear;

        this.increaseStartPrice();
        this.decreaseEndPriceByYear();
        this.decreaseEndPriceByCourse();
    }
}

const cars = [
    new Auto(2018, 200000, 300000, 120000),
    new Auto(2015, 160000, 240000, 80000),
    new Auto(2012, 340000, 180000, 50000),
    new Auto(2017, 180000, 150000, 75000),
];


function addCarIfPrice(car, carsArray) {
    if (car.endPrice > 10000) {
        carsArray.push(car);
        console.log("Pushed car to array.")
    } else {
        console.log("Car hasn't been added to array.")
    }
}
function increaseYearForAllCars(carsArray) {
    carsArray.forEach(car => {
        car.year += 1;
    });
    console.log("Increased year by 1 for each car in array.")
}

// cars.forEach(car => console.log(car));
// cars[i].increasePrice();
// cars[i].decreaseEndPriceByYear();
// cars[i].decreaseEndPriceByCourse();
// cars[i].addCourseAndYear(newCourse, NewYear);
// addCarIfPrice(new Auto(2012, 230000, 140000, 10001), cars);
// addCarIfPrice(new Auto(2012, 230000, 140000, 9999), cars);

// ZAD 12

class Mark {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
}

class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this._grades = [];
        this.average = 0;
    }

    hello() {
        return `Welcome ${this.name} ${this.surname}! Your average is: ${this.average.toFixed(2)}.`;
    }

    countAverage() {
        if (this._grades.length === 0) {
            this.average = 0;
            return;
        }

        const sumGrades = this._grades.reduce((sum, grade) => sum + grade.value, 0);
        this.average = sumGrades / this._grades.length;
    }

    get grades() {
        if (this._grades.length === 0) {
            return 'No grades!';
        }

        const infoGrades = this._grades.map(grade => `${grade.subject} - grade ${grade.value}`).join(', ');
        return `Subjects & grades: ${infoGrades}.`;
    }

    set grades(x) {
        if (x instanceof Mark) {
            this._grades.push(x);
            this.countAverage();
        } else {
            console.error("Error");
        }
    }
}

// const student = new Student('Marek', 'Kowalski');
// const grade1 = new Mark('MPR', 5);
// const grade2 = new Mark('TIN', 5);
// const grade3 = new Mark('POJ', 3);
// student.grades = grade1;
// student.grades = grade2;
// student.grades = grade3;
// console.log(student.hello());
// console.log(student.grades);