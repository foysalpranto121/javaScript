// var myInfo={

//  yourNmae : "Pranto",village:"Dhaka",phone:134567789




// }

// // can know full object or can know specific properties

// console.log(myInfo.phone);
// var newPro= myInfo[ "village"];
// console.log(newPro);
///// main game start there

function MyInfo1(yourName, village, phone) { 
    this.yourName = yourName;
    this.village = village;
    this.phone = phone;

this.showMe=function (){

    console.log(this.phone);
     console.log(this.village);
     console.log(this.yourName);
}
}

let  Newobj = new MyInfo1("Pranto", "Dhaka", 12636674);
let  Newobj1 = new MyInfo1("xyz", "Dh", 126374);
let  Newobj2 = new MyInfo1("mnf", "ka", 6674);
// console.log(Newobj);          
// console.log(Newobj.yourName);     
// console.log(Newobj1); 
// console.log(Newobj2); 
Newobj.showMe();
Newobj2.showMe();


