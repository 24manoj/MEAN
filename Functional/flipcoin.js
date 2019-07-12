var readline=require("readline-sync");
var n=readline.questionInt("Enter number of flips\n");
var i;
var tails=0;
var heads=0;
 if(n==0){
   console.log("Enter value greater then 0");
   //process.kill();
 }
for(i=0;i<n;i++){
    var re=Math.random()*(1-0)+0;
    //console.log(re);
    if(re<0.5)
      tails++;
    else
       heads++;
}
console.log("Percentage of tails "+(((tails/n))*100).toFixed(0));

console.log("Percentage of heads "+((heads/n)*100).toFixed(0));
module.exports=n;
