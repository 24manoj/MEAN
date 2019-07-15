var read=require('readline-sync');
var n=read.questionInt("Enter size N");
if(n<3)
{
    console.log("N cant be lesser then 3");
    return;
}
var a=[];



var  newmod=function ()
{for(var i=0;i<n;i++){
    var val=read.questionInt("Enter array value");
     if(a.indexOf(val)===-1)
        a.push(val);

        
}   
}


var s=function()
{var b=true;
    var sum=0;
        for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            for(var k=j+1;k<n;k++){
                sum=a[i]+a[j]+a[k];
               
                if(sum==0)
                {
                    
                    console.log(a[i]+" "+a[j]+" "+a[k]+" ===>"+ sum); 
                   b=false;
                }
            
            }
        }
    }
    if(b) console.log("sum!=0")
    
  
}
newmod();
s();
module.exports=n;

    

