/*
1.Read an integer as an Input, convert to Binary using toBinary function and perform the following functions.
i. Swap nibbles and find the new number.
ii. Find the resultant number is the number is a power of 2.
A nibble is a four-bit aggregation, or half an octet. There are two nibbles in a byte.
Given a byte, swap the two nibbles in it. For example 100
is to be represented as 01100100 in a byte (or 8 bits). The two nibbles are (0110) and (0100). If we swap the two nibbles, we get 01000110 which is 70 in decimal.
*/
//to make program to work in modern way
'use strict'
//Used to read the user input from key board.
var read=require('readline-sync');
var inp;
//read the input make it global
module.exports.i=inp=read.questionInt("Enter number");
//if inp lesser then 1,print msg out from work flow
if(inp<1){
    console.log("Number cant be lesser then zero");
    return;
}
//inp&0x0f used to get left hand four bits << left shift.
//inp&0xF0 used to get right hand four bits >> right shift. 
var res=((inp&0x0F)<<4)|((inp&0xF0)>>4);
var res1=res;
//Prints the binary represenation of res.
console.log(res.toString(2));
//making the res1 value global
module.exports.o=res1;
console.log(res1);
var c=0;
while(res1>0 && res1!=1){
// checks for res1 value is power or two.
if(res1%2!=0){
    console.log("Not a power of2");
    return;
}
c++;
res1=res1/2;
}
console.log("2 ^",c);
