/********************************************************************************************************************
 * @Execution : default node : cmd>  palindrom.js
 * @Purpose : To perform operations specified. 
 * @description : A palindrome is a string that reads the same forward and backward,
 * for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and 
 * check whether it is a palindrome. 
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 18-july-2019
 *******************************************************************************************************************/
//Importing the modules
let dlink = require('../utility/dequeue');
let read = require('readline-sync');
//creating a class object
let obj = new dlink();
//taking input from user
let str = read.question("Enter String to check palindrom ::: ");
//spliting the string into aray
str = str.split('');
//for each element present in array insert in the double queue.
str.forEach(element => {
    obj.insert(element);
});
//invokes the check method
obj.check();