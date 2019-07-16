/*
1.An Anagram Detection Example
a.Desc -> One string is an anagram of another if the second is simply a rearrangement of the first.
 For example, 'heart' and 'earth' are anagrams...
b.I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
c.O/P -> The Two Strings are Anagram or not....
*/
//Used to read the user input from keyboard.
var read=require('readline-sync');
//It allows you to include util module in your programs.
var util=require('util');
var str1;
//reading user input.
 str1=read.question("Enter string ");
var str2;
//reading user input.
str2=read.question("Enter second String ");
if(str1==null || str2==null)
{
    console.log("String cannot be null...");
    return;
}
if(str1.length==str2.length){
// Spliting the string into arrays.
module.exports.s1=arr1=str1.split('');
//module.exports  is used to make the variable global.
module.exports.s2=arr2=str2.split('');
//Sorting  the array.
arr1.sort();
arr2.sort();
var res=false;
for(var i=0;i<arr1.length;i++){
//Compares for equality and retruns true.
    if(arr1[i]==arr2[i]) res=true;
}//end of far
//if true.
if(res)
console.log("anagram");
// if false
else
//util class function.out puts the string.
util.error("not an anagram");
}//end if
else{
    //util class function .Out puts the string.
    util.error("Length mismatch");
    } 