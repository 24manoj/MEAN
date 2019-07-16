var n=1000;
var arr=[];
for(var i=2;i<n;i++){
    var res=true;
    for(var j=2;j<i;j++){
    if(i%j==0)
     res=false;
    }
 if(res==true)
 arr.push(i);
}
console.log(arr);
