var read=require('readline-sync');
var arr=[];
class sorting
{
static inp()
{
    var n=read.questionInt("Enter number of elemnts need");
    console.log("Enter elements");
    for(var i=0;i<n;i++){
        arr.push(read.questionInt());
    }
   module.exports.arr=arr;
   return(this.sort(arr));
}
static sort(a)
{
    if(a.length<2)
    return a;
    else{
        for(var i=0;i<a.length;i++){
            for(var j=0;j<a.length-i-1;j++)
            {
                if(a[j]>a[j+1]){
                    var temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
        }
    }

    module.exports.a=a;
    return a;
}
}
console.log(sorting.inp());