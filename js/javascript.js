// // // Add two numbers in two methods:
// // // Method 1:
// // // var f, l,result;
// // // f = prompt("Enter 1st number: ");
// // // l = prompt("Enter 2nd number: ");
// // // result=parseFloat(f)+parseFloat(l);
// // // document.write(result);

// // // Method 2:
// // // document.write(parseFloat((first = prompt("Enter 1st number: "))) +parseFloat((last = prompt("Enter 2nd number: "))));


// //Concat Function:
// // var fname,lname;
// // fname = prompt("Enter first name: ");
// // lname = prompt("Enter last name: ");
// // document.write(fname.concat(" "+lname));
// // //"length" of last name:
// // document.write("</br>Last name length: "+lname.length);
// // //Uppercase Function:
// // document.write("</br>Last name length: "+fname.toUpperCase());
// // //Lowercase Function:
// // document.write("</br>Last name length: "+lname.toLowerCase());
// // //Slice Function:
// // document.write("</br>Last name length: "+lname.slice(2,5));



// //Arrithmatic Operators:
// // let f = parseFloat(prompt("Enter 1st number: "));
// // let l = parseFloat(prompt("Enter 2nd number: "));

// // result=f+l;
// // document.write("Summation: "+result);

// // result=f-l;
// // document.write("</br>Substruction: "+result);

// // result=f*l;
// // document.write("</br>Multiplication: "+result);

// // result=f/l;
// // document.write("</br>Division: "+result);

// // result=f%l;
// // document.write("</br>Modulas: "+result);

// // var f = prompt("Enter 1st number: ");
// //     if(f<100)
// //     document.write("less than 100");
// //     else if(f>100 && f<200)
// //     document.write("Greater than 100");
// //     else if(f>200 && f<300)
// //     document.write("Greater than 200");
// //     else 
// //     document.write("Invalid");

// // Process:1>
// // var digit = (Number(prompt("Enter the number:")));
// // var print = digit >0 ? document.write("positive"):document.write("negative");

// // Process:2> (not used document.write again and again and )
// // Using 2 or multiple condition:
// // var digit = (Number(prompt("Enter the number:")));
// // var print = digit >100 ? "Greater than 100": digit>0 ? "Positive":"Negative";
// // document.write(print);


// // switch:
// // let digit = prompt("Enter the number:");
// // digit = parseInt(digit/10);
// // switch (digit){
// //     case 10:
// //         case 9:
// //             case 8:
// //                 document.write("A+");
// //                 break;
// //             case 7:
// //                 document.write("A");
// //                 break;
// //             case 6:
// //                 document.write("B");
// //                 break;
// //             case 5:
// //                 document.write("C");
// //                 break;
// //             case 4:
// //             case 3:
// //             case 2:
// //             case 1:
// //             case 0:
// //                 document.write("F");
// //                 break;
// //             default:
// //                 document.write("Invalid");

// // }

// //exercise of switch case:
// //switch case:
// // var digit = prompt("Enter character:").toUpperCase();
// // switch(digit){
// //     case 'B':
// //         document.write("B has been pressed");
// //         break;
// //     case 'c': case 'C':
// //         document.write("c/C has been pressed");
// //         break;
// //     case 'd': case 'D':
// //         document.write("d/D has been pressed");
// //         break;

// //     default:
// //         document.write("Invalid Iput");
// // }


// //For loop:
// // for(var i=1;i<=10;i++){
// //     document.write(i+"</br>");
// // }


// //For loop from user input:
// // var n=(Number(prompt("Enter koto bar chaw: ")));
// // for(var i=1;i<=n;i++){
// //     document.write(i+"</br>");
// // }

// // While loop from user input:
// // var i=1,n=(Number(prompt("Enter koto bar chaw: ")));
// // while(i<=n){
// //     document.write(i+"</br>");
// //     i++;
// // }


// // Do While loop from user input:
// // var i=1,n=(Number(prompt("Enter koto bar chaw: ")));
// // do{
    
// //     document.write(i+"</br>");
// //     i++;
// // }while(i<=n);


// // Continue: (nirdisto condition er jonno thambe, pore continue korbe)
// //For loop from user input:
// // var n=(Number(prompt("Enter koto bar chaw: ")));
// // for(var i=1;i<=n;i++){
    
// //     if(i==3)
// //     continue;
// //     document.write(i+"</br>");

// // }



// // method-1:
// // for(var i=1;i<=8;i++){
// //     for(j=1;j<=10;j++)
// //     document.write(i+'x'+j+'='+i*j+'<br>');
// // }


// // method-2:
// // for(var i=1;i<=10;i++){
// //     for(j=1;j<=8;j++){
// //         if(j==8){
// //             document.write(j+'x'+i+' ='+j*i)
// //         }
// //         else{
// //           document.write(j+'x'+i+'='+j*i+', ');  
// //         }
        
// //     }
// //     document.write('<br>')
// // }




// //================================ 22nd December, 2022 =================================

// // function sq(num){
// //     document.write('Result is: '+num**2);
// // }
// // sq(7);

// // let num1 = Number(prompt('Enter the first number: '));
// // let num2 = Number(prompt('Enter the second number: '));
// // let num3 = Number(prompt('Enter the third number: '));
// // function result(){
// //     document.write('Addition is: '+(num1+num2+num3)+'</br>');
// //     document.write('Substraction is: '+(num1-num2-num3)+'</br>');
// //     document.write('Multiplication is: '+(num1*num2*num3)+'</br>');
// //     document.write('Division is: '+(num1/num2/num3)+'</br>');
// // }
// // result();

// // function userNamePass(a,b){
// //     document.write("Username: "+a+"</br>")
// //     document.write("Password: "+b)
// // }
// // let userName=prompt("Enter Username:")
// // let userPass=prompt("Enter Password: ")
// // userNamePass(userName,userPass);



// // let userName=prompt("Enter Username:");
// // let userPass=prompt("Enter Password: ");
// // (function userNamePass(a,b){
// //     document.write("Username: "+a+"</br>");
// //     document.write("Password: "+b);
// // })(userName,userPass);


// // let f1=prompt('Write 1st data: ');

// // var array=[44,'ashim','student','passionate'];
// // // document.write(array[0]+"</br>"+array[1]+"</br>"+array[2]+"</br>"+array[3]);
// // // document.write(array[0]);
// // // document.write(array[2]);
// // // document.write(array[3]);

// // for(var i=0; i<array.length; i++){
// //     document.write(array[i]+"</br>");
// // }





// // Method 1 
// // var myList = [];
// // myList.length = 4;
// // for(var i=0; i<myList.length; i++){
// //     myList[i]=prompt('Enter the data which is index '+i);
// //     }

// // for(var i=0; i<myList.length; i++){
// // document.write(myList[i]+'</br>');
// // }

// // Method 2 
// // var myList = new Array(4);
// // for(var i=0; i<myList.length; i++){
// //     myList[i]=prompt('Enter the data which is index '+i);
// //     document.write(myList[i]+'</br>');
// //     }

// // for(var i=0; i<myList.length; i++){
// // document.write(myList[i]+'</br>');
// // }

// // var myarray=['ashim',true,35,'bangladesh'];
// // document.getElementById('ee').innerHTML=myarray;
// // document.write(myarray);

// // var myarray=['I','love','Leo','Messi',10];
// // for(var i=0; i < myarray.length; i++){
// //     document.write('<h1 style="color:black;background-color:yellow;padding:33px;text-align:center;border:3px solid black;border-radius:3px 24px;">'+myarray[i]+'</h1' + '</br>')
// // }





// // var myarray = [];
// // var n = Number(prompt('Enter how many element you want: '));
// // for(var i=0; i<n; i++){
// //     let element= prompt('Enter element: ');
// //     myarray.push(element)
// // }
// // document.write(myarray);


// // var array1=['Ashim',35,'Ghosh',true,11,false,'End'];
// // document.write('<b><u>Array_1:</u></b> '+array1+'<br>')
// // var array2=['Ghosh',9,'Messi',true,25,false,'Stop'];
// // document.write('<b><u>Array_2:</u></b> '+array2+'<br><br>')

// // var array3=array1.concat(array2);
// // document.write('<b><u>concat:</u></b> '+array1.concat(array2)+'<br>');
// // array1.pop();
// // document.write('<b><u>after pop:</u></b> '+array1+'<br>');

// // array1.push('push_done');
// // document.write('<b><u>push:</u></b> '+array1+'<br>');

// // array1.shift();
// // document.write('<b><u>shift:</u></b> '+array1+'<br>');

// // array1.unshift('added');
// // document.write('<b><u>unshift:</u></b> '+array1+'<br>');

// // array1.splice(1,1,'super');
// // document.write('<b><u>splice:</u></b> '+array1+'<br>');

// // document.write('<b><u>slice:</u></b> '+array1.slice(1,3)+'<br>');

// // var num = [33,21,23,45,21,11,3,44,5];

// // document.write('<b><u>Main Array:</u></b> '+num+'</br>');
// // num.sort(function(a,b){
// //     return a-b;
// // });
// // document.write(num);



// //56,2,3,32,22
// // let usr = [];
// // for(var i=0; i<5; i++){
// //     let element = Number(prompt('Enter 5 numbers: '));
// //     usr.push(element)
// // }
// // document.write('Your main array is: '+usr);
// // high = usr[0];
// // for (i=0; i<usr.length; i++){
// //     if(usr[i]>usr[i+1]){
// //         high=usr[i];
// //     }
// // }
// // document.write('</br>'+high);



// // let usr = [];
// // for(var i=0; i<5; i++){
// //     let element = Number(prompt('Enter 5 numbers: '));
// //     usr.push(element)
// // }
// // document.write('Your main array is: '+usr);



// function highscore(usr){
//     high = usr[0]
//     for(var i=0; i<5; i++){
//         if(high<usr[i]){
//             high=usr[i];
//         }
//         return high;
//     }
// }
// var usr = [56,2,3,32,22];
// document.write(highscore(usr));



// const arr = [[1, 'A'], [2, 'B'], [3, 'C']];
// const arrN = [];
// for(let i = 0; i<3; i++){
//     for(let j = 0; j<2; j++){
//         var element = (arr[i][j]);
//         arrN.push(element);
//     }
// }
// document.write(arrN);



//Object:
// let student = {
//     name: 'Ashim Ghosh',
//     class: 'Honours',
//     semester: '1st',
//     session: '2020-21',
//     roll: 10329,
//     male: true,
//     courses: ['Reading Skill','Writing Skill','Poetry','Prose', 'Political Theory','Independent BD']
    
// }
// console.log(student);
// document.write(typeof student.male); 



// Object by Constructor:

// function Student(name,age,roll,male,courses){
//     this.name = name,
//     this.age = age,
//     this.roll = roll,
//     this.male = male,
//     this.courses = courses,
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.roll);
//         console.log(this.male);
//         console.log(this.courses);
//     }
// }

// var student1 = new Student('Ashim', 22, 108475, true, ['Bangla','English','Math','Religion']);


// student1.display(); //to execute the display function
// console.log(student1); //to showup the student1 as object





//Object catch by class:

// class Student{
//     constructor(name,age,roll,male,courses){
//     this.name = name,
//     this.age = age,
//     this.roll = roll,
//     this.male = male,
//     this.courses = courses
//     }
//     print(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.roll);
//         console.log(this.male);
//         console.log(this.courses);
//     }
// }
// let student1 = new Student('Ashim', 22, 108475, true, ['Bangla','English','Math','Religion']);

// student1.print();


// class Customer{
//     constructor(c_id,c_name,prof,items){
//         this.c_id=c_id,
//         this.c_name=c_name,
//         this.prof=prof,
//         this.items=items
//     }
//     print(){
//         console.log(this.c_id);
//         console.log(this.c_name);
//         console.log(this.prof);
//         console.log(this.items);
//     }
// }
// var customer1 = new Customer(101,'Jolil Mia','Teacher',['Guava','Lichi','Banana','Orange','Mango']);
// customer1.print();


// class Customer{
//     constructor(c_id,c_name,prof,items){
//         this.c_id=c_id,
//         this.c_name=c_name,
//         this.prof=prof,
//         this.items=items
//     }
//     print(){
//         console.log(this.c_id);
//         console.log(this.c_name);
//         console.log(this.prof);
//         console.log(this.items);
//     }
// }

// var c_id = Number(prompt('Enter customer id: '));
// var c_name = prompt('Enter customer name: ');
// var prof = prompt('Enter customer profession: ');
// var items = prompt('Enter items: ');


// var customer1 = new Customer(c_id,c_name,prof,items);
// customer1.print();




// class Customer{
//     constructor(c_id,c_name,prof,items){
//         this.c_id=c_id,
//         this.c_name=c_name,
//         this.prof=prof,
//         this.items=items
//     }
//     print(){
//         console.log(this.c_id);
//         console.log(this.c_name);
//         console.log(this.prof);
//         document.write(this.items);
//     }
// }

 
// const items = [];   

// var customer1 = new Customer(Number(prompt('Enter customer id: ')),prompt('Enter customer name: '),prompt('Enter customer profession: '),items);

// for(var i=1; i<=3; i++){
//     let elements = prompt('Enter your items: ');
//     items.push(elements);
// }

// customer1.print();




// DOM start:

var head1 = document.getElementById('header1');
head1.innerHTML = '';
head1.style.color = 'white';
head1.style.backgroundColor = 'blue'
head1.style.fontSize = '55px'
head1.style.padding = '20px'
head1.style.width = '400px'
head1.style.border = '15px solid black'
head1.style.fontStyle = 'italic'
head1.style.borderRadius = '33px'
head1.style.textAlign = 'center'

document.getElementById = 'header2';
let m = document.createElement('marquee');
m.innerHTML = 'I love leo messi';
header1.appendChild(m)


