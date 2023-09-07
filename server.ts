// const myString: string = "shivam raj";

// console.log(myString)

// function greet(name:string):string{
//     console.log(`welcome to the typescript world ${name}`);
//     return name;
// }
// console.log(greet('shivam'));

// const names = ["Alice", "Bob", "Eve"];

// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// names.forEach((s)=>{
//     console.log(`with arrow fn ${s.toUpperCase()}`)
// })

// function objecttype(pt:{x:number;y:number}):number{
//     return pt.x+pt.y;
// }

// console.log(objecttype({x:3,y:4}))

// const obj:string{
//     firstname ='shivam',
//     secondname ='raj'
// }
// function obj1(o){
//     console.log(o.firstname);
// }
// obj1(obj);


// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//  // console.log(obj.last.toUpperCase());
// //'obj.last' is possibly 'undefined'.
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }
 
//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// printName({first:'shivam'})

function union(id:string|number){
    console.log(id);
}
union(100)