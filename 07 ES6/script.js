//Lecture: let and const

/*
//ES5
var name5 = 'John';
var age5 = 10;
name5 = 'Mark';
console.log(name5); // => Mark

//ES6
const name6 = 'John';
let age6 = 23;
name6 = 'Mark';
console.log(name6); // => Error
*/

// var trong function-scoped
// let va const in ES6 are block-scoped

/*
//ES5
function driversLicence5(passedTest) {
    if(passedTest) {
        // console.log(firstName); // undefined. Bởi vì variables are hoisted 
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ' ' + yearOfBirth);
    }
    // console.log(firstName + ' ' + yearOfBirth); // 
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    if(passedTest) {
        // console.log(firstName); // ERROR. Bởi vì temporal-dead zone means variables are 
                                   // hoisted, but cann't access theme before they are declared  
        let firstName = 'John';
        const yearOfBirth = 1990;

    }
    console.log(firstName + ' ' + yearOfBirth); // => error
}

driversLicence6(true);


let i = 10;
for(let i = 1; i < 4; i++) {
    console.log(i); // => 1, 2, 3
}

console.log(i); // => 10

var i = 10;
for(var i = 1; i < 4; i++) {
    console.log(i); // => 1, 2, 3
}

console.log(4); // => 10

*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Blocks and IIFEs ---------------------------------*/

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); // => Error
// console.log(c); // => 3. Because they're function scoped

//ES5
(function() {
    var d = 5;
})();

// console.log(d); // => Error


/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Strings ---------------------------------*/

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +
            '. Today, he is ' + calcAge(yearOfBirth) + 'years old');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); // =>false
console.log(n.endsWith('th')); // =>true
console.log(n.includes('oh')); // =>true
console.log(`${firstName} `.repeat(3)); // =>John John John
*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Arrow functions ---------------------------------*/

/*
const years = [1990, 1985, 1982];

//ES5
var age5 = years.map(function(el) {
    return 2016 - el;
});
console.log(age5);


//ES6
let age6 = years.map(el => 2016 - el);
console.log(age6);

age6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});
*/

/* ------------------------------ Arrow functions 2 ---------------------------------*/

/*

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            //var str = 'This is ' + this.position + ' ' + this.color; //undefined. 
                                                //this lúc này là windown object.
                                                //Bởi vì call back function là regular function call
            
            
            var str = 'This is ' + self.position + ' ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

//ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is ' + this.position + ' ' + this.color;
            alert(str);
        });
    }
}

// box6.clickMe();

*/

/*
var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { // undefined. lúc này là windown object
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is ' + this.position + ' ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();




function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el; //Nếu ko có bind thì this này là object window. 
                                                    //Bởi vì trong này là anonymos function
    }.bind(this)
    );
    console.log(arr);
}

var friends = ['mark', 'job'];
//new Person('Mark').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}` ); 
    console.log(arr);
}

//new Person('John').myFriends6(friends);
*/
/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Destructuring ---------------------------------*/

/*
//ES5
// var john = ['john', 25];
// var name = john[0];
// var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1995);
console.log(age2);
console.log(retirement);

*/


/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Arrays ---------------------------------*/

/*

const boxes = document.querySelectorAll('.box'); // trả về  node list

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5

for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed';
}


//ES6
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }

    cur.textContent = 'I changed';
}



//ES5
var ages = [12, 20, 8, 21, 19, 15];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Spread Operator ---------------------------------*/

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(1, 2, 3, 4);
console.log(sum1);

//ES5
var ages = [1, 2, 3, 4];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);




const familyA = ['John', 'Mark'];
const familyB = ['Peter', 'July'];

const bigFamily = [...familyA, 'A', ...familyB];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple'); // convert from node list to array

*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Rest parameters ---------------------------------*/

/*
spread operator is used in the function call
the rest operator is used in the function declaration 
to exact an arbitrary (tùy ý) number of parameters 
*/

//ES5
/*
function isFullAge5() {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);
    argArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
}

isFullAge5(1990, 1999, 2000, 2005);
isFullAge5(1990, 1980, 2000, 2005, 2012, 1969);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1980, 2000, 1997);



//ES5

function isFullAge5(limit) {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments, 1);
    console.log(argArr);
    argArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 1999, 2000, 2005);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1980, 2000, 1997);

*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Default parameters ---------------------------------*/

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
}


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
}

var john = new SmithPerson('John', 1990);
*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Maps ---------------------------------*/

//maps are better than object to create hash maps. Because use anything as key,
//map are iterable and making easy to loop, get the size of a map

/*

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, Please try again');

//console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)){
    // question.delete(4);
    //console.log('Answer 4 is here');
}

*/
//question.clear();


// question.forEach((value, key) => {
//     console.log(`This is ${key} : ${value}`);
// });

// for(let [key, value] of question.entries()) {
//     if(typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));


/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Classes ---------------------------------*/

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.caculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'IT');

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    caculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();

*/

/* ------------------------------ End ------------------------------------------------*/

/* ------------------------------ Classes and subclasses ---------------------------------*/

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.caculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

//Kế thừa các property của person 
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

johnAthlete5.caculateAge();
johnAthlete5.wonMedal();


//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    caculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.caculateAge();

*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, 
and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, 
the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, 
default parameters, maps, arrow functions, destructuring, etc.

*/

/*
class InformationTown {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class Parks extends InformationTown {
    constructor(name, year, length, width, number_tree) {
        super(name, year);
        this.length = length;
        this.width = width;
        this.number_tree = number_tree;
    }

    //Tinh dien tich
    caculateAcreage() {
        return this.length * this.width;
    }

    //Tinh mat do
    caculateTreeDensity() {
        return this.number_tree / this.caculateAcreage();
    }

    getTreeDensity() {
        console.log(this.name + ' has tree density is ' + this.caculateTreeDensity());
    }

    caculateAge() {
        var year_now = new Date().getFullYear();
        return year_now - this.year; 
    }

    getPark1000Trees() {
        if(this.number_tree > 1000) {
            console.log(this.name + ' has more than 1000 trees')
        }
    }
}

console.log('PARKS');
const park1 = new Parks('park 1', 1990, 50, 100, 1000);
const park2 = new Parks('park 2', 1980, 200, 100, 2000);
const park3 = new Parks('park 3', 1995, 100, 100, 3000);

park1.getTreeDensity();
park2.getTreeDensity();
park3.getTreeDensity();

let averageAge = parseFloat((park1.caculateAge() + park2.caculateAge() + park3.caculateAge()) / 3);
console.log('Our 3 park have an average age of ' + averageAge);

class Streets extends InformationTown {
    constructor(name, year, length) {
        super(name, year);
        this.length = length;
    }

    getLength() {
        return this.length;
    }

    getClassification() {
        let type_street = 'tiny';
        if(this.length < 50) {
            // console.log(this.name + ' Street, build in ' + this.year + ', is a tiny');
            type_street = 'tiny';
        } else if(this.length >=50 && this.length < 100) {
            type_street = 'small';
        } else if(this.length >= 100 && this.length < 150) {
            type_street = 'normal';
        } else if(this.length >= 150 && this.length < 200) {
            type_street = 'big';
        } else {
            type_street = 'huge';
        }
        console.log(this.name + ' Street, build in ' + this.year + ', is a ' + type_street);
    }
}

const street1 = new Streets('street 1', 2000, 80);
const street2 = new Streets('street 2', 1990, 150);
const street3 = new Streets('street 3', 2010, 800);
const street4 = new Streets('street 4', 2015, 20);

console.log('STREETS');
const total_length = street1.getLength() + street2.getLength() + street3.getLength() + street4.getLength();
const average_length = parseFloat(total_length / 4);
console.log('Total length: ' + total_length + ', average length ' + average_length);
street1.getClassification();
street2.getClassification();
street3.getClassification();
street4.getClassification();

*/

/* --------------------------------- SUA BAI ----------------------------- */
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);