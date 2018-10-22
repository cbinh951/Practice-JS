// Function Constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.caculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

//Đầu tiên new operator sẽ được gọi tạo ra empty object, sau đó gọi tới constructor function
//trong TH này là Person với các this variable không trỏ đến global object 
var john = new Person('John', 1990, 'teacher');
var smith = new Person('Smith', 1995, 'IT');

john.caculateAge();
smith.caculateAge();




//Sự khác nhau giữa Object.create vs function constructor: 
//object.create xây dựng một đối tượng kế thừa trực tiếp từ đối tượng 
//mà chúng ta truyền vào đối số đầu tiên.
//function constructor from the constructor's prototype property
//Object.create
var personProto = {
    caculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1995},
    job: {value: 'designer'}
});



//Primitivies vs Object

//Primitivies
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23


//Obj
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj1.age); //30


//function
var age = 27;
var obj = {
    name: 'John',
    city: 'London'
};

function change(a, b) {
    a = 30;
    b.city = 'US';
}

change(age, obj);
console.log(age); //27
console.log(obj); // 'US'











