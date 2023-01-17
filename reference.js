var obj={num:2};
var addToThis= function(a,b,c){
     return this.num + a + b + c;
};
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));