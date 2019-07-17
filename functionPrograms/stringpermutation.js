
"use strict"
var read=require('readline-sync');
var str=read.question("Enter String  ");

console.log(per(str));
function per(str)
{
    if(str.length<2) return str;
    var perm=[];
    for(var i=0;i<str.length;i++){
        var char=str[i];
        if(str.indexOf(char)!=i)
          continue;
        var rem=str.substring(0,i)+str.substring(i+1,str.length);
       
        for( var p of per(rem))
        perm.push(char+p);
    }
    return perm;
}