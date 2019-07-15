var read=require('readline-sync');
var n=read.questionInt("Enter Nth number   ");
search(0,n);
function search(l,h){
    var mid=parseInt((l+h)/2);
   
    
     if(l<h&& l!=h){
        console.log("[",l,"-",mid,"] ||  [",mid+1," -",h,"]");
    var inp=read.question("left or Right    ");

    if(inp=="left")
    search(l,mid);
    else if(inp=="right")
    search(mid+1,h);
    else
    {
    console.log("Key word miss match");
    return;
}}else{
console.log("u r number is ",mid);
}}
