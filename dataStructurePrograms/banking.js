/*
Simulate Banking Cash Counter
a.Desc -> Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people.
 Maintain the Cash Balance.
b.I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
c.Logic -> Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain the cash balance
*/
/*
file name:Banking
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//used make the program work in mordern way
"use strict"
//Importing queue.js 
var q=require('../subModules/Queue');
//invoking the  class constructr
var qu=new q();
//Invoking memebers of class
qu.Queue();
console.log("Size of queue is  ",qu.size());
var ca=qu.cash();
//Prints if cash is greater then 0.
if(ca>0)
console.log("cash Avaliable in bank is ",ca);

