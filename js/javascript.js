// // Add two numbers in two methods:
// // Method 1:
// // var f, l,result;
// // f = prompt("Enter 1st number: ");
// // l = prompt("Enter 2nd number: ");
// // result=parseFloat(f)+parseFloat(l);
// // document.write(result);

// // Method 2:
// // document.write(parseFloat((first = prompt("Enter 1st number: "))) +parseFloat((last = prompt("Enter 2nd number: "))));


//Concat Function:
// var fname,lname;
// fname = prompt("Enter first name: ");
// lname = prompt("Enter last name: ");
// document.write(fname.concat(" "+lname));
// //"length" of last name:
// document.write("</br>Last name length: "+lname.length);
// //Uppercase Function:
// document.write("</br>Last name length: "+fname.toUpperCase());
// //Lowercase Function:
// document.write("</br>Last name length: "+lname.toLowerCase());
// //Slice Function:
// document.write("</br>Last name length: "+lname.slice(2,5));



//Arrithmatic Operators:
// let f = parseFloat(prompt("Enter 1st number: "));
// let l = parseFloat(prompt("Enter 2nd number: "));

// result=f+l;
// document.write("Summation: "+result);

// result=f-l;
// document.write("</br>Substruction: "+result);

// result=f*l;
// document.write("</br>Multiplication: "+result);

// result=f/l;
// document.write("</br>Division: "+result);

// result=f%l;
// document.write("</br>Modulas: "+result);

// var f = prompt("Enter 1st number: ");
//     if(f<100)
//     document.write("less than 100");
//     else if(f>100 && f<200)
//     document.write("Greater than 100");
//     else if(f>200 && f<300)
//     document.write("Greater than 200");
//     else 
//     document.write("Invalid");

// Process:1>
// var digit = (Number(prompt("Enter the number:")));
// var print = digit >0 ? document.write("positive"):document.write("negative");

// Process:2> (not used document.write again and again and )
// Using 2 or multiple condition:
// var digit = (Number(prompt("Enter the number:")));
// var print = digit >100 ? "Greater than 100": digit>0 ? "Positive":"Negative";
// document.write(print);


// switch:
// let digit = prompt("Enter the number:");
// digit = parseInt(digit/10);
// switch (digit){
//     case 10:
//         case 9:
//             case 8:
//                 document.write("A+");
//                 break;
//             case 7:
//                 document.write("A");
//                 break;
//             case 6:
//                 document.write("B");
//                 break;
//             case 5:
//                 document.write("C");
//                 break;
//             case 4:
//             case 3:
//             case 2:
//             case 1:
//             case 0:
//                 document.write("F");
//                 break;
//             default:
//                 document.write("Invalid");

// }

//exercise of switch case:
//switch case:
// var digit = prompt("Enter character:").toUpperCase();
// switch(digit){
//     case 'B':
//         document.write("B has been pressed");
//         break;
//     case 'c': case 'C':
//         document.write("c/C has been pressed");
//         break;
//     case 'd': case 'D':
//         document.write("d/D has been pressed");
//         break;

//     default:
//         document.write("Invalid Iput");
// }


//For loop:
// for(var i=1;i<=10;i++){
//     document.write(i+"</br>");
// }


//For loop from user input:
// var n=(Number(prompt("Enter koto bar chaw: ")));
// for(var i=1;i<=n;i++){
//     document.write(i+"</br>");
// }

// While loop from user input:
// var i=1,n=(Number(prompt("Enter koto bar chaw: ")));
// while(i<=n){
//     document.write(i+"</br>");
//     i++;
// }


// Do While loop from user input:
// var i=1,n=(Number(prompt("Enter koto bar chaw: ")));
// do{
    
//     document.write(i+"</br>");
//     i++;
// }while(i<=n);


// Continue: (nirdisto condition er jonno thambe, pore continue korbe)
//For loop from user input:
// var n=(Number(prompt("Enter koto bar chaw: ")));
// for(var i=1;i<=n;i++){
    
//     if(i==3)
//     continue;
//     document.write(i+"</br>");

// }



// method-1:
// for(var i=1;i<=8;i++){
//     for(j=1;j<=10;j++)
//     document.write(i+'x'+j+'='+i*j+'<br>');
// }


// method-2:
// for(var i=1;i<=10;i++){
//     for(j=1;j<=8;j++){
//         if(j==8){
//             document.write(j+'x'+i+' ='+j*i)
//         }
//         else{
//           document.write(j+'x'+i+'='+j*i+', ');  
//         }
        
//     }
//     document.write('<br>')
// }




//================================ 22nd December, 2022 =================================

// function sq(num){
//     document.write('Result is: '+num**2);
// }
// sq(7);

let num1 = Number(prompt('Enter the first number: '));
let num2 = Number(prompt('Enter the second number: '));
let num3 = Number(prompt('Enter the third number: '));
function result(){
    document.write('Addition is: '+(num1+num2+num3)+'</br>');
    document.write('Substraction is: '+(num1-num2-num3)+'</br>');
    document.write('Multiplication is: '+(num1*num2*num3)+'</br>');
    document.write('Division is: '+(num1/num2/num3)+'</br>');
}
result();