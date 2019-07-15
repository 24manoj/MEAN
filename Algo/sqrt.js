var read=require('readline-sync');
var a=0;
var b=0;
  function sqrt()
{
var c=read.questionInt("Enter number");
var t=c;
while(Math.abs(t-c/t)>(1*Math.pow(Math.E,-15)*t)){
t=((c/t)+t)/2;


 
}
console.log(t);
}
sqrt();