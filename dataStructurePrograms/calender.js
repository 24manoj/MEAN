/********************************************************************************************************************
 * @Execution : default node : cmd>  calender.js
 * @Purpose : To perform operations specified. 
 * @description : Write a program Calendar.java that takes the month and year as command-line arguments and
 *  prints the Calendar of the month. Store the Calendar in an 2D Array,
 * the first dimension the week of the month and the second dimension stores the day of the week. Print the result as following.
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 22-july-2019
 *******************************************************************************************************************/

let read = require('readline-sync');
let w = require('../utility/2dcalender');
let m = process.argv[2];
let y = process.argv[3];
//invokes function
w.week(y, m);
module.exports = {
  m,
  y
};