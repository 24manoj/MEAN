var read=require('readline-sync');
var util=require('util');

var str1;
 str1=read.question("Enter string ");
var str2;
str2=read.question("Enter second String ");
if(str1==null || str2==null)
{
    console.log("String cannot be null...");
    return;

}
if(str1.length==str2.length){
module.exports.s1=arr1=str1.split('');
module.exports.s2=arr2=str2.split('');
arr1.sort();
arr2.sort();
var res=false;
for(var i=0;i<arr1.length;i++){
    if(arr1[i]==arr2[i]) res=true;
}
if( res)
console.log("anagram");

else
util.error("not an anagram");
}else{
    util.error("Length mismatch");
} 