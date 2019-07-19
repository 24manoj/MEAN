/*
Ordered List
a.Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. 
Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
b.I/P -> Read from file the list of Numbers and take user input for a new number
c.Logic -> Create a Ordered Linked List having Numbers in ascending order. 
d.O/P -> The List of Numbers to a File*/
/*
file name: ordered list
created: 18-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */

//used make the program work in mordern way
"use strict"
//to take input from user,importing module
let inp=require('readline-sync');
//importing modules from utility.js
let classlink=require('../subModules/Linked').classlink;
let read=require('../subModules/Linked').readfile;
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
    console.log(e);}
 