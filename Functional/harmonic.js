var read=require('readline-sync');
var n=read.questionInt("Enter Nth value \n");
if(n<=0)
 console.log("Not a valid number");
else
{ var sum=1;
    var i=0;
    while(n!=0){
        i++;
        if(i==1) 
        console.log(i+" ==> 1");
        else{
         sum=sum+(1/i);
         console.log("1/"+i+"  ==>"+(1/i))
        }
        n--;
    }
 console.log(" total sum ofsum "+sum);
}