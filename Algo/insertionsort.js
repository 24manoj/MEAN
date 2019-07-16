var read=require('readline-sync');
var start;
var end;
var arr=[];
class sorting
{
static inp()
{var n;
  module.exports.n=n=read.questionInt("Enter number of elemnts need");
  if(n<1)
  {
      console.log("sry...Value is not proper>??");
      return ;
      
  }
    console.log("Enter elements");
    for(var i=0;i<n;i++){
        arr.push(read.questionInt());
    }
module.exports.a=arr;
console.log(arr);
    start= new Date();
    console.log(start);
   return(this.sort(arr));
}
static sort(a)
{
    if(a.length<2)
    return a;
    else{
        var j;
        var key;
        for(var i=1;i<a.length;i++) {
            j=i-1;
            key=a[i];
            while(j>=0&&a[j]>key) {
               a[j+1]=a[j];
                j-=1;
            }
            a[j+1]=key;
            }
        }
       
        console.log("Elpased time is",((new Date())-start),"Ms");

        return a;
    }
}var c;
console.log(c=sorting.inp());

module.exports.b=c;