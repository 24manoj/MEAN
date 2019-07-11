var read=require('readline-sync');
var n=read.questionInt("Enter N term:  ");
console.log("prime factors are::")
for(var i=2;(i*i)<=n;i++)
{
    while(n%i==0){
    console.log(i+"\t");
    n=n/i;
    }
}