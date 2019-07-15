var read=require('readline-sync');
var fs=require('fs');
var arr;
try{
 arr=(fs.readFileSync("E://MEAN//Algo//text.txt"));
arr=arr.toString().split(' ');
arr.sort();
console.log(arr);
var res=Binary(arr);
console.log(res)
}
catch(e) {console.log("error",e);}


function Binary(arr)
{ var l=0;
    var n=arr.length-1;
 
    var key=read.question("Enter String to search : ");
    while(l<=n){
        var mid=parseInt((l+n)/2);
        if(arr[mid]==key)
        {
            return (key+"   found");
            
        }
        else if(key<arr[mid]) n=mid-1;
        else  l=mid+1;
    }
    return "not found";
    
}

