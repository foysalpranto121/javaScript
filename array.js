
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
