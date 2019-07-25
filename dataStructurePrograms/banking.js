/********************************************************************************************************************
 * @Execution : default node : cmd> node banking.js
 * @Purpose : To perform operations specified. 
 * @description :Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
 *  Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people.
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 19-july-2019
 *******************************************************************************************************************/
// program work in mordern way
"use strict"
//Importing queue.js 
let q = require('../utility/Queue');
//invoking the  class constructr
let qu = new q();
//Invoking memebers of class
qu.Queue();

let ca = qu.cash();
//Prints if cash is greater then 0.
console.log("Size of queue is  ", qu.size());
if (ca > 0)
    console.log("cash Avaliable in bank is ", ca);