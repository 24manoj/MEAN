var read=require('readline-sync');
var arr=[1000,500,100,50,10,5,2,1];
var amt=read.questionInt("Enter Amt");
var ch=[];
var count=0;
vend(amt,0);
function vend(amt,i){
    if(amt>0)
    {
    
    ch[i]=parseInt(amt/arr[i]);
    amt=amt%arr[i];
  
    if(ch[i]>0)
        { count=count+ch[i];
            console.log(arr[i]," * ", ch[i]," =>",(arr[i]*ch[i]));
            
            
         
        }
    vend(amt,i+1);
    
    }
  
}

console.log("Count of coins  ",count);
