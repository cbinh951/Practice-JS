var binh = {
    yearOfBirth: 1995,
    caculateAge: function(){
        this.age = 2018 - this.yearOfBirth;
    }
}

binh.caculateAge();
console.log(binh);