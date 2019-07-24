/*
 Prime Number Program and store only the numbers in that range that are Anagrams.
  For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
   Further store in a 2D Array the numbers that are Anagram and numbers that are not Anagram.*/
/*
file name:primeAnagram.js
created: 22-07-2019
Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
let to=require('../utility/twoDarray').arr;
//invokes the functions
let arr=to.twodarray();

arr.forEach(ele=>
   {
    //console.log(ele);
   console.log(to.anaGram(ele));
   });


