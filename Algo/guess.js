/*
Question to find your number
a.Desc -> takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.
b.I/P -> the Number N and then recursively ask true/false if the number is between a high and low value
c.Logic -> Use Binary Search to find the number
d.O/P -> Print the intermediary number and the final answer
*/
//importing the module
var read=require('readline-sync');
//taking command line argument
var n=parseInt(process.argv[2]);
var c=1;
if(n<1)
{
    console.log("N cant be lesser then one");
    return;
}
//making n global
module.exports.n=n;
var m=n;
//checking number is pow of two or not.
while(m>1){
if(m%2!=0){
    console.log("number should be power of 2");
    return ;
}
c+=1;
m=m/2;
}
//invokes function
search(0,n);
//function defination
function search(l,h){
if(c>0){
//find the mid element
    var mid=parseInt((l+h)/2);
    //check low is not equal to high.
    if( l!=h){
        console.log("[",l,"-",mid,"] ||  [",mid+1," -",h,"]");
       var inp=read.question("left or Right    ");
    if(inp=="left")
    //recursively calls the function 
    search(l,mid);
    else if(inp=="right")
    //recursively calls the function
    search(mid+1,h);
    else
    {
    console.log("Key word miss match");
    return;}
}else {
    console.log("u r number is ",mid);
return ;
}
}//end if
}//end func

