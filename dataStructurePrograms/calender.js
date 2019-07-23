/*
Write a program Calendar.java that takes the month and year as command-line arguments and
 prints the Calendar of the month. Store the Calendar in an 2D Array,
  the first dimension the week of the month and the second dimension stores the day of the week. Print the result as following.
*/
/*
file name:calender
created: 22-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */

let read=require('readline-sync');
let w=require('../utility/2dcalender');
let m=process.argv[2];
let y=process.argv[3];
//invokes function
w.week(y,m);
