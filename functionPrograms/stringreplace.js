var readline=require("readline-sync");
var name=readline.question("\n Your name \n");
var str="Hello   <<username>>,How are you??";
var str2="<<username>>";
if(name.length<3)console.log("String must be atleast 3 character ");
else
console.log(str.replace(str2,name));