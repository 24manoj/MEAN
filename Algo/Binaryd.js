'use strict'
var read=require('readline-sync');
var inp;
module.exports.i=inp=read.questionInt("Enter number");
if(inp<1){
    console.log("Number cant be lesser then zero");
    return;
}
var res=((inp&0x0F)<<4)|((inp&0xF0)>>4);
var res1=res;
console.log(res.toString(2));
module.exports.o=res1;
console.log(res1);
var c=0;

while(res1>0 && res1!=1){
if(res1%2!=0){
    console.log("Not a power of2");
    return;
}

c++;
res1=res1/2;
}
console.log("2 ^",c);
