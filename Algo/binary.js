var read=require('readline-sync');
var util=require('util');
var arr=[];
class prgm
{

 static binary()
{
var n=read.question('Enter N value');
if(n.length==0)
{
    console.log("N cant be null");
    return;
}
console.log("Enter values in order");

for(var i=0;i<n;i++)
{
arr.push(read.question());
}
module.exports.a=arr;
this.searchprgm(arr,0,arr.length-1);

}
static searchprgm(a,l,n)
{
    var ser;
  module.exports.s=ser=read.question("Enter search key ");

while(l<=n)
{
    var mid=parseInt((n+l)/2);

if(ser<a[mid])
 n=mid-1;
 else if(ser>a[mid])
 l=mid+1;
 else if(a[mid]==ser){
 console.log( ser ,"  key found @ index",a.indexOf(ser));
 return;
}
}
console.log("Key not found");
    return;



}
}

prgm.binary();