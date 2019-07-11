var readline=require("readline-sync");
var name=readline.question("\n Your name \n");
var str="Hello   <<username>>,How are you??";
var str2="<<username>>";
console.log(str.replace(str2,name));