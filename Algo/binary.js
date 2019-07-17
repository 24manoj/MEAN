/*
a) binarySearch method for integer.
*/
//Used to read the user input from key board.
var read=require('readline-sync');
//It allows you to include util module in your programs.
var util=require('util');
//initilize empty array(one dimension).
var arr=[];
//declaration of class
class prgm
{
/*
The static keyword defines a static method for a class.
 Static methods aren't called on instances of the class. 
Instead, they're called on the class itself.
 These are often utility functions, such as functions to create or clone objects.*/
 //static class function binary 
 static binary()
{
//Reading value from user
var n=read.question('Enter N value');
if(n.length==0)
{
    console.log("N cant be null");
    return;
}
console.log("Enter values in order");
for(var i=0;i<n;i++)
{
//pushing the values to array.
arr.push(read.question());
}
//Making the array global.
module.exports.a=arr;
//invoking the serarchprgm with arguments.
this.searchprgm(arr,0,arr.length-1);
}

//statuc class function
static searchprgm(a,l,n)
{
//Reading the search key,making it global.
 module.exports.s=ser=read.question("Enter search key ");
var ser;
//repeats until low is lesser then high value.
while(l<=n)
{
 //Finding the mid value of array.   
var mid=parseInt((n+l)/2);
//if search key is lesser then array of mid.
//initalize mid-1 to high(n)
if(ser<a[mid])
 n=mid-1;
 //if search key is greater then array of mid.
 //initalize mid+1 to low.
 else if(ser>a[mid])
 l=mid+1;
 //key found if key present in array
 else if(a[mid]==ser){
 console.log( ser ,"  key found @ index",a.indexOf(ser));
 return;
}
}//end of while
//if key not present in array.
console.log("Key not found");
    return;
}//end of while
}//end of function 
//invokes static binary function
prgm.binary();