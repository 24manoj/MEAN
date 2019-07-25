/********************************************************************************************************************
 * @Execution : default node : cmd>  orderd.js
 * @Purpose : To perform operations specified. 
 * @description : Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. 
 * Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 20-july-2019
 *******************************************************************************************************************/

//used make the program work in mordern way
"use strict"
//to take input from user,importing module
let inp = require('readline-sync');
//importing modules from utility.js
let classlink = require('../utility/Linked').classlink;
let read = require('../utility/Linked').readfile;
//local variables
let str, arr, link, key, arr = [];
//readfile is sub function.returns file data in byte format.
//toString() converts to String and initalizing the value to array arr.
str = readfile().toString();
arr = str.split(' ');
console.log(arr);
//invokes the constructer
link = new classlink();
//for each element node will be created and linked.
arr.forEach(element => {
    link.insertfront(element);
});
link.display();
//taking  user input
key = inp.question("Enter key to search  ");
link.search(key);
//Exception handling
try {
    link.store();
} catch (e) {
    console.log(e);
}