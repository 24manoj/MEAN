/*
Insertion Sort 
a.Desc -> Reads in strings from file and prints them in sorted order.
Uses insertion sort.
b.I/P -> read in the list words from file
c.Logic -> Use Insertion Sort to sort the words in the String array
d.O/P -> Print the Sorted List
*/
//imports the module.
var read=require('readline-sync');
//imports the file system module
var fs=require('fs');
var start;
var end;
var arr=[];
//creating class
class sorting
{
    //static class function
static inp()
{
    var n;
    //reads the input from file
    var r=fs.readFileSync("E://MEAN//Algo//text.txt");
    //conveting the file objects to string and spliting them to array.
    arr=r.toString().split(' ');
    //making the array length global.
  module.exports.n=n=arr.length;
  if(n<1)
  {
      console.log("sry...Value is not proper>??");
      return ; 
  }
//making the array global
module.exports.a=arr;
console.log(arr);
//initalizing the start variable to start time
    start= new Date();
    console.log(start);
    //returns the sorted array
   return(this.sort(arr));
}
/* this function takes the j+1 value as key and comapare it with j value.
if array j is greater ,push reaming values to 1 index lower and place the key to j+1.*/
static sort(a)
{
    if(a.length<2)
    return a;
    else{
        var j;
        var key;
        for(var i=1;i<a.length;i++) {
            j=i-1;
            key=a[i];
        //move the array values 1 index higher
            while(j>=0&&a[j]>key) {
               a[j+1]=a[j];
                j-=1;
            }
            a[j+1]=key;
            }
        }
        //Calculating elapsed time  of sort function.
        console.log("Elpased time is",((new Date())-start),"Ms");
  return a;
    }
}var c;
console.log(c=sorting.inp());
//making sorted array global
module.exports.b=c;