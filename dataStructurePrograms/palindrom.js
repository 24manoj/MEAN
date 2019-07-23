/*Palindrome-Checker

a.Desc -> A palindrome is a string that reads the same forward and backward,
for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and 
check whether it is a palindrome.
b.I/P -> Take a String as an Input 
c.Logic -> The solution to this problem will use a deque to store the characters of the string.
We will process the string from left to right and add each character to the rear of the deque. 
d.O/P -> True or False to Show if the String is Palindrome or not.
*/
/*
file name: unordered list
created: 18-07-2019
Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//Importing the modules
let dlink=require('../utility/dequeue');
let read=require('readline-sync');
//creating a class object
let obj=new dlink();
//taking input from user
let str=read.question("Enter String to check palindrom ::: ");
//spliting the string into aray
str=str.split('');
//for each element present in array insert in the double queue.
str.forEach(element => 
    {
        obj.insert(element);
   });
//invokes the check method
obj.check();
