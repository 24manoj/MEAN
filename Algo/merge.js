var read=require('readline-sync');
var arr=[];


 
function inp()
{
    var n=read.questionInt("Enter nunber of arrays required ");
    console.log("Enter them ");
    for(var i=0;i<n;i++){
        arr.push(read.questionInt());
    }

sort(0,arr,(arr.length-1));

}

function sort(l,a,n)
 {
    
     var mid=parseInt((l+n)/2);

    if(l<n){
    sort(l,a,mid);
    sort((mid+1),a,n);
    merge(l,a,n,mid);
    }

}

function merge(s,a,n,mid){
    
var n1=parseInt(mid-s+1);
var n2=parseInt(n-mid);

var l=[n1];
var r=[n2];

for(var i=0;i<n1;i++){
    l[i]=a[(s+i)];
}

for(var j=0;j<n2;j++){
    r[j]=a[mid+1+j];
}

var i=j=0;
var k=parseInt(s);

while(i<n1 &&j<n2){
    if(l[i]<=r[j])
    {
        arr[k]=l[i];
        i++;
    }
    else 
    {
        arr[k]=r[j];
        j++;
       
    }
 k++;
}
while(i<n1)
{
    arr[k]=l[i];
    i++;
    k++;

}
while(j<n2)
{
    arr[k]=r[j];
    j++;
    k++;
}

}

inp();

