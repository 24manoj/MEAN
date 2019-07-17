/*
 1. dayOfWeek that takes a date as input and prints the day of the week that date falls on.
  Your program should take three command-line arguments: m (month), d (day), and y (year).
 For m use 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
  Use the following formulas, for the Gregorian calendar (where / denotes integer division):
*/
//Reading command line arguments.
var d=parseInt(process.argv[2]);
var m=parseInt(process.argv[3]);
var y=parseInt(process.argv[4]);
//array with string values
var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
y0 = y-parseInt((14-m)/ 12);
x = y0 + parseInt(y0/4)-parseInt(y0/100) + parseInt(y0/400);
m0 =m +12*parseInt( (14- m) / 12)-2;
d0 = (d + x + parseInt(31*(m0 / 12)))% 7;
//prints the day as the output
console.log(days[d0]);