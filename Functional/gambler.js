var read=require('readline-sync');
var s=read.questionInt("Enter the stake ");
var goal=read.questionInt("Enter Goal ");
var num=read.questionInt("Number of times to take ");
var wins=0;
for(var i=0;i<num;i++){
    var stake=s;
   while(stake<goal && stake>0){
       if(Math.random()<0.5)
           stake++;
       else
           stake--;
       
       if(stake==goal) {
        wins++;
         }
        }

}
console.log(wins +"  Wins over "+s+" Stakes");
console.log("Average win percent  "+((wins/num)*100));


