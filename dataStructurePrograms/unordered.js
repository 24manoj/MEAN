/* UnOrdered List
a.Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save the list into a file
b.I/P -> Read from file the list of Words and take user input to search a Text
c.Logic -> Create a Unordered Linked List. The Basic Building Block is the Node Object. Each node object must hold at least two pieces of information. One ref to the data field and  second the ref to the next node object.
d.O/P -> The List of Words to a File.*/

/*
file name: unordered list
created: 18-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//used make the program work in mordern way
"use strict"
//to take input from user,importing module
let inp=require('readline-sync');
//importing modules from utility.js
let classlink=require('../utility').classlink;
let read=require('../utility').readfile;
//local variables
let str,arr,link,key;arr=[];
//readfile is sub function.returns file data in byte format.
//toString() converts to String and initalizing the value to array arr.
str=readfile().toString();
arr=str.split(' ');
console.log(arr);
//invokes the constructer
link=new classlink();
//for each element node will be created and linked.
arr.forEach(element => {
link.insertfront(element);
});
link.display();
//taking  user input
key=inp.question("Enter key to search  ");
link.search(key);
//Exception handling
try{
link.store();
}catch(e){
    console.log(e);
}




