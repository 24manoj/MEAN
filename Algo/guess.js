var read=require('readline-sync');
var n=read.questionInt("Enter Nth number   ");
var c=1;
if(n<1)
{
    console.log("N cant be lesser then one");
    return;
}
module.exports.n=n;
var m=n;
while(m>1){
if(m%2!=0){
    console.log("number should be power of 2");
    return ;
}
c+=1;
m=m/2;
}
search(0,n);
function search(l,h){
if(c>0){

    var mid=parseInt((l+h)/2);
    if( l!=h){
        console.log("[",l,"-",mid,"] ||  [",mid+1," -",h,"]");
       var inp=read.question("left or Right    ");
    if(inp=="left")
    search(l,mid);
    else if(inp=="right")
    search(mid+1,h);
    else
    {
    console.log("Key word miss match");
    return;}
}else {console.log("u r number is ",mid);
return ;
}
}}

