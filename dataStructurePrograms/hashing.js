/* 
Hashing Function to search a Number in a slot

a.Desc -> Create a Slot of 10 to store Chain of Numbers that belong to each Slot,
 to efficiently search a number from a given set of number
b.I/P -> read a set of numbers from a file and take user input to search a number
c.Logic -> Firstly store the numbers in the Slot. Since there are 10 Numbers divide each number by 11 and
 the reminder put in the appropriate slot. Create a Chain for each Slot to avoid Collision. 
 If a number searched is found then pop it or else push it.
  Use Map of Slot Numbers and Ordered LinkedList to solve the problem. 
  In the Figure Below, you can see number 77/11 reminder is 0 hence sits in the 0 slot while 26/11 remainder is 4 hence sits in slot 4
d.O/P -> Save the numbers in a file
*/
/*
file name:hashing
created: 20-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
let read=require('readline-sync');
let siglink=require('../utility/Linked').classlink;
require('../utility/Linked').r;
let fs=require('fs');
let arr=[];
let ar2=[];
let str,n,i;
str=readfile().toString();
str=str.split(" ");
n=str.length;
i=0;
//creates array of objects.
while(i<=10)
{
    arr.push(new siglink());
    i+=1;
}
//inserts into node
str.forEach(element=>{
    let index=parseInt(parseInt(element)%11);
    arr[index].insertfront(element);
    ar2.push(index);

});
let ar1=[];
var search=read.question("Enter search key");
let index=parseInt(parseInt(search)%11);
arr[index].search(search);
let prev=null;
str.forEach(element=>
    {
        let index=parseInt(parseInt(element)%11);
        if(prev!=index)
        {
         arr[index].display();
         prev=index;
         ar1=ar1.concat(arr[index].getArray());
        }
        prev=index;
    });
    //remove the duplicates
    let unique = [...new Set(ar1)];
     //writes into the file
    fs.writeFile("E://MEAN//text1.txt",unique,(err,data)=>
    {
        if(err) throw err;
    });