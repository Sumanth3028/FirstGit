var student={age:20};
var printAge= function(){
    return this.age;
};
var bind=printAge.bind(student);
console.log(bind());