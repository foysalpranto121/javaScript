
// basic array


let  fndNmae =["rahim","karim","emni","hudai"];

console.log(fndNmae[0]);
 let fnd =fndNmae[1];
 console.log(fnd);
 fndNmae[1]="kasem";
console.log(fndNmae);

// Array"s common method

// add value using   push
fndNmae.push(" pranto")
console.log(fndNmae);

// remove value using pop
fndNmae.pop();
console.log(fndNmae);
// shift()-- remove start element
fndNmae.shift();
console.log(fndNmae);

// unshift( add first)-- in this case u have to declare which value u want to add ( obiously it will be in first position

fndNmae.unshift("Mahin");
console.log(fndNmae);


// slice () mehod ---> u can sepecifically show  any value from ur lists any part 
console.log(fndNmae.slice(1,2));// take array[1] ---> kassem output
// u can taka example as a cake ( slice ) --- cut 1st to end part ( not 3 part at a time )
console.log(fndNmae.slice(0,2));



//// splice --->>>  specific way to cut and replace new thing or value 
let number=[1,2,3,4,5,6,7,8]
console.log(number.splice(0,4,));
console.log(number.slice(0,4,));
