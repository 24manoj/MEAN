var read=require('readline-sync');
var util=require('util');
var arr=[];
class prgm
{

 static binary()
{
var n=read.question('Enter N value');
console.log("Enter values in order");

for(var i=0;i<n;i++)
{
arr.push(read.question());
}
this.searchprgm(arr,0,arr.length);

}
static searchprgm(a,l,n)
{
    var ser=read.question("Enter search key");
    

while(l<n)
{
    var mid=parseInt((n+l)/2);
if(ser<a[mid])
 n=mid-1;
 else if(ser>a[mid])
 l=mid++;
 else if(a[mid]==ser){
 console.log( ser ,"  key found @ index",a.indexOf(ser));
 return;
}
else
{
    console.log("Key not found");
    return;

}}
}

}

prgm.binary();