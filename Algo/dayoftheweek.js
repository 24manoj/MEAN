var read=require('readline-sync');
var d=read.questionInt("Enter Day ");
var m=read.questionInt("Enter Month ");
var y=read.questionInt("Enter year ");
y0 = parseInt(y-(14-m)/ 12);
x = parseInt(y0 + (y0/4)-(y0/100) + (y0/400));
m0 =parseInt( m +( 12 *(14- m) / 12)-2);
d0 = parseInt((d + x + 31*(m0 / 12))% 7);
console.log(parseInt(d0));