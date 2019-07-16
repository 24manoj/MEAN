var read=require('readline-sync');
var d=read.questionInt("Enter Day ");
var m=read.questionInt("Enter Month ");
var y=read.questionInt("Enter year ");
y0 = y-(14-m)/ 12;
x = y0 + y0/4-y0/100 + y0/400
m0 = m + 12 *((14- m) / 12) - 2;
d0 = (d + x + 31*m0 / 12)% 7;
console.log(parseInt(d0));