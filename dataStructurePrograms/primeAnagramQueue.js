/*
Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the Linked List and,
Print the Anagrams from the Queue.
Note no Collection Library can be used.*/
/*
file name:primeAnagramQueue.js
created: 23-07-2019
Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
let to=require('../utility/twoDarray').arr;
let queue=require('../utility/Queue');
let q=new queue();
q.Queue();
//gets prime numbers
let arr=to.twodarray();
let arrnew=[];
let arr2=[];
let i=0;
//iterates 2d array,gets the anagrams
arr.forEach(element=>
    {
        arr2.push(to.anaGram(element));
    }) ;
 
 //iterates and push to Queue
arr2.forEach(element=>
    { 
        element.forEach(ele=>
            {  
                q.enQueue(ele);
            });
    });
console.log("Anagrams elements in reverse order");
//iteates and pop elements from Queue
arr2.forEach(element=>
    {
        element.forEach(ele=>
            {
             console.log(q.dequeue());
            });
    });
