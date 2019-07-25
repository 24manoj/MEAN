/********************************************************************************************************************
 * @Execution : default node : cmd>  primeAnagramStack.js
 * @Purpose : To perform operations specified. 
 * @description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the Linked List 
 * and Print the Anagrams in the Reverse Order.
 * Note no Collection Library can be used.
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 23-july-2019
 *******************************************************************************************************************/

let to = require('../utility/twoDarray').arr;
let stack = require('../utility/stack');
//creating stack object
let st = new stack();
//inoveks stack memebers,stack() intailize stack array.
st.stack();
let arr = to.twodarray();
let arrnew = [];
let arr2 = [];
let i = 0;
//iterates 2d array,convertion from 2d array to 1d array
arr.forEach(element => {
    element.forEach(ele => {
        arrnew.push(ele);

    })
});
arr2 = to.anaGram(arrnew);
//iterates and push to stack
arr2.forEach(element => {
    element.forEach(ele => {
        st.push(ele);
    });
});
console.log("Anagrams elements in reverse order");
//iteates and pop elements from stack
arr2.forEach(element => {
    element.forEach(ele => {
        console.log(st.pop());
    });
});