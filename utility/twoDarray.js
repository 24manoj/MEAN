/**
 This file contains all the sub methods of twoDarry.
 */
/*
file name: twoDarray
created: 20-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//declaration of two d array
let arr=[];
let arr1=[]; 
/* find prime.takes num as argumnet checks from the given num is prime arenot
if retruns true,else false*/
let findprime=(num)=>
{ let j=2;
    if(num%2!==0)
    {
        while(j<num)
        {
            if(num%j==0)
            return false;
            j=j+1;
        }
        return true;  
    }
    return false;
}

/*Take no arguments adds the prime number to two d array,
each rom conatins prime value lesser then 100,200..etc;*/
let twodarray=()=>
{ 
 let i=1;
 let k=2;
 let m=0;
 let num=1000;
 let j=0;
    while(i<=(num/100))
    {
        while(k<((i)*100))
        {
            if(findprime(k))
            {
                arr1.push(k);
                j=j+1;
            }
         k=k+1;
        }
        arr.push(arr1);
         arr1=[];
        i=i+1;
    }
   //printArray(); 
   return arr;  
}

/*Prints the array elements ,takes no argument*/
let printArray=()=>
{
    arr.forEach(Element=>
    {
     console.log(Element);
    })
    return;

    }
    /*divides the elements in rages and checks for anagram*/
    let anaGram=(arr)=>{
        let l=0;
        let m=0;
        let anarray=[];
        while(l<arr.length-1){
            m=l+1;
            while( m<arr.length){
                if(isAana(arr[l].toString(),arr[m].toString())){
                    let b=true;
                    anarray.forEach(element=>{
                        if(element.includes(arr[l])){
                            b=false;
                        if(!element.includes(arr[m]))   element.push(arr[m]);
                        } 
                    });
                    if(b==true) anarray.push([arr[l],arr[m]]);
                }
                m+=1;

            }
            l+=1;
        }
        return anarray;  
    }
    /*checks two are anagram are not*/
let isAana=(str1,str2)=>
{
    let sortedstr=(str)=>str.split('').sort().join('');
    if(sortedstr(str1)==sortedstr(str2))
    {
        return true;
    }
    return false;
}
module.exports.arr={twodarray,anaGram,printArray};