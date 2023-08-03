// console.log('welcome');
// a=2;
// console.log(a);
// var b=3;
// console.log(b);
// var x=10;
// var y=5;
// var r=x/y;
// console.log(r);

// var w=x%y;
// console.log(w);
// var firstname='dhanya';
// var secondname="nipin";
// var res=firstname+' '+secondname;
// console.log(res);
// let dhanya={ eye:'bllack',
// height:163,
// age:28

// }

// console.log(dhanya);
// let car=new Object();
// car.model='hundai';
// car.color='red';
// console.log(car);
// let person={
//     address:{street:'kannur',
//     sity:'pallikunnu',
//     state:'kerala'

//     }

// };
// console.log(person.address.sity);

// var array1=['blue','red','black'];
// array1.pop(0);
// console.log(array1);



function display(a)
{
    console.log('hi my name is' +a);
}
display('dhanya');
function sum(a,b){
    console.log(a+b);
}
sum(2,3);

let person={
fname:'dhanya',
lastname:'nipin',
fullname:function(){
    return this.fname+this.lastname;

}


}
console.log(person.fullname());
