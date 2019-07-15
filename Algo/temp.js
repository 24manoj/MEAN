
 var read=require('readline-sync');
 class util
 {
  static conv()
 {
     var c=read.question("Enter temperature in celsius");
var far=(c*(9/5)+32);
console.log(far);
 }

}
util.conv(); 