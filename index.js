// console.log("new to js");
// console.log('it is well');


//This is a comment
// this is a comment
/*
this
is
a
comment
// */
// let people= 44;
// let firstname= 'alfred'
// people= people + 1;
// let students= true;
// console.log('hello', people);
// console.log('nice one', firstname);
// console.log(students);

// document.getElementById('p1').innerHTML= "hi " + firstname;
// // document.getElementById('p2').innerHTML= "you are " + people;
// // document.getElementById('p3').innerHTML= "enrolled: " + students;
// let students = 40;

// // students = students + 2;
// // students = students  /2;
// students = students  *2;

// let theName = window.prompt('what si your name?');


// console.log(theName);
// document.getElementById('mybtn').onclick =function(){
    
//     a=document.getElementById('aTextbox').value;
//     a=Number (a);

//     b=document.getElementById('bTextbox').value;
//     b= Number (b);

//     c=Math.sqrt(Math.pow(a, 2)+ Math.pow(b,2));

//     document.getElementById('cLabel').innerHTML ="Side C:" + c;
// }
// let count= 0;

// document.getElementById('dcButton').onclick=function() {
// count -=1;
// document.getElementById('countLabel').innerHTML=count;
// }
// document.getElementById('rstButton').onclick=function() {
//     count =0;
//     document.getElementById('countLabel').innerHTML=count;
// }
// document.getElementById('inButton').onclick=function() {
//     count +=1;
//     document.getElementById('countLabel').innerHTML=count;
// }
// let x= Math.floor(Math.random() *6+1);

// document.getElementById('rollbtn').onclick= function(){
//     x= Math.floor(Math.random() *6+1);
//     y= Math.floor(Math.random() *6+1);
//     z= Math.floor(Math.random() *6+1);

// document.getElementById('xLabel').innerHTML= x;
// document.getElementById('yLabel').innerHTML= y;
// document.getElementById('zLabel').innerHTML= z;
// }
//  let myName= 'Ugele Alfred';

//  w= myName.charAt(2);
//  t= myName.replaceAll('e', 'x');
//  console.log(t);

// let ev='aomine daiki';

// let firstName;
// let LastName;

// firstName= ev.slice(0, ev.indexOf(' '));
// LastName= ev.slice(ev.indexOf(' ')+1);

// console.log(firstName);
// console.log(Last)
//  let guns = -7;

//  if(guns >= 21){
//      console.log('you sabi');
//  }
//  else if(guns <0){
//      console.log('commot for here');
//  }
// else{
//     console.log('You no reach')
// }

// document.getElementById('mybtn').onclick= function(){

//     const checbox =document.getElementById('checbox')
//     const vsacard =document.getElementById('vsacard')
//     const mstrcard =document.getElementById('mstrcard')
//     const ppcard =document.getElementById('ppcard')

//  if(checbox.checked){
//      console.log('You are subscribed');

//  }
//  else{
//     console.log('You are not subscribed');
//  }
// if(vsacard.checked){
//     console.log('You are using a visa card');
// }
// else if(mstrcard.checked){
//     console.log('You are using a master card');
// }
// else if(ppcard.checked){
//     console.log('You are using a PayPal card');
// }
// else{
//     console.log('Pick a payment method');
// }  
// }
// let tar= 'mtn' ;

// switch (tar) {
//     case 'A':
//         console.log('you sabi.');
//         break;
//         case 'B':
//             console.log('you sabi small.');
//             break;
//             case 'C' :
//         console.log('you try.');
//         break;
//         case 'F' :
//         console.log('you no sabi.');
//         break;
//     default:
//         console.log('not gradeable')
// //         break;
// let UserName ='';

// while( UserName == '' || UserName == null){
//     UserName =window.prompt("what's your name" );
// }
//  console.log('Hello', UserName);
 
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');



// for(let i=1; i <= rows; i+=1){
//     for(let j=1; j <= columns; j+=2){
//    document.getElementById('myRec').innerHTML +=j;
//  }
//  document.getElementById('myRec').innerHTML +='<br>' ;
// }
// const answer = Math.floor(Math.random()* 10 + 1);
// let guesses = 0;

// document.getElementById("submitbtn").onclick = function () {
  
//     let guess = document.getElementById("guessField").value; 
//     guesses+=1;

//     if (guess == answer){
//         alert(`${answer} is the #. It took you ${guesses}`);
//     }
//     else if(guess < answer){
//         alert("Too small!");
//     }
//     else if(guess > answer){
//         alert("Too large!");
//     }
//     else{
//         alert("Enter valid number")
//     }
// }
// let temp = 32;
// temp = toCelcius(temp);
// console.log(temp);

// function toCelcius(temp){
//     return (temp - 32) * (5/9);
// }
// function toFahrenheit(temp){
//     return temp * 9/5 + 32;
// }
// function toKelvin(temp) {
//      return temp + 273;
// }
//  document.getElementById("submitbtn").onclick = function () {
//    let temp;

//    if(document.getElementById('cbutton').checked) {
//        temp = document.getElementById('textbox').value;
//        temp = Number(temp);
//        temp = toCelcius(temp);
//        document.getElementById('tempLabel').innerHTML = temp + "°C";
//    }
//    else if(document.getElementById('fbutton').checked) {
//     temp = document.getElementById('textbox').value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);
//     document.getElementById('tempLabel').innerHTML = temp + "°F";
//    }
//    else if(document.getElementById('kbutton').checked) {
//     temp = document.getElementById('textbox').value;
//     temp = Number(temp);
//     temp = toKelvin(temp);
//     document.getElementById('tempLabel').innerHTML = temp + "°K";
//    }
//    else{
//        document.getElementById('tempLabel').innerHTML = 'Select a unit';
//    }
// }
// let numbers = [1,2,3,4,5,6,7,8];
//  let maximun = math.max(numbers);
//  console.log(maximum)

// let p = ['sponge', 'bob', 'squid', 'ward'];
// let q = ['mr', 'krabs', 'okc'];
// p.push(...q);
// console.log (p);
//  sum(2, 3, displaycons);

//  function sum(x,y, callback) {
//      let result = x + y;
//      callback(result);
//  }
//  function displaycons(output){
//      console.log(output)
//  }
//  function displatDOM(output){
//      document.getElementById('myLabel').innerHTML = output;
//  let students = ['Sponegebob', 'Patrick', "Squidward"];
//  students.forEach(reduce);
//  students.forEach(print);

//  function reduce(element, index, array){
//      array[index] = element[0].toLowercase() + element.substring(1);
//  }
//      function print(element){
//          console.log(element)
     
//  }
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// squares.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }
// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkage);

// adults.forEach(print);

// function checkage(element){
//     return elelment >= 18;
// }
// function print(element){
//     console.log(element);
// }
let prices =[5, 20, 15, 20, 25,40, 50, 60];
let total = prices.reduce(checkout);

console.log('The total is: $${total}');

function checkout(total, element){
    return total + element;
}
