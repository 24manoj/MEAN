/*
Bubble Sort 
a.Desc -> Reads in integers or String prints them in sorted order using Bubble Sort
b.I/P -> read in the list ints
c.O/P -> Print the Sorted List 
*/
//Reads inputs from user
var read=require('readline-sync');
//initalize empty array.
var arr=[];
//creating a class
class sorting
{
//class static function
static inp()
{
    var n=read.questionInt("Enter number of elemnts need");
    console.log("Enter elements");
    for(var i=0;i<n;i++){
        //Pushing to array 
        arr.push(read.question());
    }
    //making arr global
   module.exports.arr=arr;
   return(this.sort(arr));
}//end of function 
//static function
static sort(a)
{//return a if array lenth is less then 2.
    if(a.length<2)
    return a;
    else{
        for(var i=0;i<a.length;i++){
            for(var j=0;j<a.length-i-1;j++)
            {//checks first value with next value
                if(a[j]>a[j+1]){
                    //swap the values
                    var temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }//end if
            }//end for j
        }//end for i
    }//end else
//making the sorted array global
    module.exports.a=a;
    //returns a
    return a;
}//end func
}//end of class
//invokes and prints the output
console.log(sorting.inp());