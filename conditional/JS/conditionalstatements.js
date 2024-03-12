let a=number(prompt("enter a number"));
let b=math.trunc(a/10);
let c=a%10;
let sum=b+c;
let mul=b*c;
if(sum+mul===a){
    console.log("a is speciall")
}
else{
    console.log("not special");
}
//To check wheather a character is vowel or not
let ch=prompt("enter a character");
if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o' || ch=='u'|| ch=='A'|| ch=='E' || ch=='I'|| ch=='O'|| ch=='U'){
    console.log("vowel");
}else{
    console.log("not a vowel");
}
// using switch statement
let char=prompt("enter a character");
switch(char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("character is vowel");
        break;
    default:
      console.log("character is not vowel");
}
// to print week days program
let day=Number(prompt("enter a number"));
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
    console.log("Sunday");
}
//program to display month with number
let month=Number(prompt("enter a number"));
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("agust");
        break;
    case 9:
        console.log("sept");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    default:
    console.log("dec");
}
//program to print wheather a number is even or odd
let num=Number(prompt("enterv a number"));
if(num % 2 ===0){
    console.log("num is even");
}else{
    console.log("num is odd");
}
//to print type of triangle using values
let s1=Number(prompt("enter s1 number"));
let s2=Number(prompt("enter s2 number"));
let s3=Number(prompt("enter s3 number"));
if(s1==s2 && s2==s3){
    console.log("Equilateral triangle");
}else if(s1==s2 || s2==s3|| s1==s3){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle")
}
//to check leap year are not
let year=Number(prompt("enter a year"));
if(year %4 ===0 || year %400 ===0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}
