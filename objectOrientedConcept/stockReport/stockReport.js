/********************************************************************************************************************
 * @Execution : default node : cmd>stockReport.js
 * @Purpose : To learn oops concepts. 
 * @description : Write a program to read in Stock Names, Number of Share, Share Price.
 *  Print a Stock Report with total value of each Stock and the total value of Stock.
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
let stock = require('../utility/stock');
let read = require('readline-sync');

let s = [];
let total = 0;
let n = read.questionInt("Enter number of stocks needed:::");
while (n != 0) {
    //Creating n object
    s[n] = new stock();
    s[n].readInp()
    total += s[n].calulate();
    n -= 1;
}
console.log("Total  cost for all the shares", total)