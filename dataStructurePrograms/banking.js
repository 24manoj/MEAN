/*
Simulate Banking Cash Counter
a.Desc -> Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people.
 Maintain the Cash Balance.
b.I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
c.Logic -> Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain the cash balance
*/
/*
file name:Banking
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//used make the program work in mordern way
"use strict"
var read=require('readline-sync');
var q=require('../subModules/Queue');
var qu=new q();
var n=read.questionInt("Enter the Q size ");
var arr1=[n];
var arr2=[n];
var i=0;
var cash=0;
qu.Queue();
while(i<n)
{
    arr1[i]=read.question("Purpose of person(w or D)  ");
    console.log(arr1[i]);
    if(arr1[i]==="w"||arr1[i]==="d")
    {
        arr2[i]=read.questionInt("Amt of person  ",(i+1));
        qu.enQueue(arr2[i]);
        i+=1;   
    } 
    else{
        console.log("U R option is not present in this bank..");
        return;
    }
    
}
do{
    var choice=read.question("Yes or NO to come out of queue   ");
    if(choice=="yes")
    {
        var index=arr2.indexOf(qu.dequeue());
        if(arr1[index]=="w") cash-=arr2[index];
        else cash+=arr2[index];
        if(cash<0){ 
            console.log("NO cash in bank");
        return;
    }
        
        console.log("Upadted cash is",cash);
    }
 n=n-1;
}while(n==0);





