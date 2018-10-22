//Passing functions as argument

var years = [1990, 1988, 1995, 1960, 2005];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function caculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, caculateAge);
var fullAges = arrayCalc(ages, isFullAge);
console.log(ages);
console.log(fullAges);


//Function return Function
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UI design it?');
        }
    }else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name);
        }
    }else {
        return function(name) {
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('binh');
designerQuestion('john');
designerQuestion('marry');
interviewQuestion('teacher')('Dan');



//immediately invoked function expression  (IIFE)
//được thực thi ngay khi nó tạo ra, chỉ chạy 1 lần
//cần nó thực thi một cách tự động
//giảm thiểu memory leak do global variables gây ra. 
//Bởi vì những biến được khai báo trong IIFE sẽ không thể sử dụng bên ngoài scope của nó.
(
    function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

//console.log(score); // Error

(
    function(goodLuck) {
        var score = Math.random() * 10;
        console.log('goodluck: ' + goodLuck);
        console.log(score >= 5 - goodLuck);
    }
)(5);


/* ------------------------------ CLOSURE ------------------------------------*/
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UI design it?');
//         }
//     }else if(job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name);
//         }
//     }else {
//         return function(name) {
//             console.log('Hello ' + name + ', What do you do?');
//         }
//     }
// }

//Chuyen qua Closure, chỉ có 1 return 
function interviewQS(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UI design it?');
        }else if(job === 'teacher') {
            console.log('What subject do you teach, ' + name);
        }else {
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

interviewQS('teacher')('john');




/*------------------------------------- Bind, call and apply --------------------------*/
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'format') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name +
                    ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name +
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '
            + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('format', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//apply nhan array arguments
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning1');
johnFriendly('night2');

var emilyFormat = john.presentation.bind(emily, 'format');
emilyFormat('afternoon');



var years = [1990, 1988, 1995, 1960, 2005];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function caculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, caculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);