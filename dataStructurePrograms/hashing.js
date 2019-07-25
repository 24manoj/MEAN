/********************************************************************************************************************
 * @Execution : default node : cmd>  hashing.js
 * @Purpose : To perform operations specified. 
 * @description :  Create a Slot of 10 to store Chain of Numbers that belong to each Slot,
 * to efficiently search a number from a given set of number
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 20-july-2019
 *******************************************************************************************************************/

let read = require('readline-sync');
let siglink = require('../utility/Linked').classlink;
require('../utility/Linked').r;
let fs = require('fs');
let arr = [];
let ar2 = [];
let str, n, i;
str = readfile().toString();
str = str.split(" ");
n = str.length;
i = 0;
//creates array of objects.
while (i <= 10) {
    arr.push(new siglink());
    i += 1;
}
//inserts into node
str.forEach(element => {
    let index = parseInt(parseInt(element) % 11);
    arr[index].insertfront(element);
    ar2.push(index);

});
let ar1 = [];
var search = read.question("Enter search key");
let index = parseInt(parseInt(search) % 11);
arr[index].search(search);
let prev = null;
str.forEach(element => {
    let index = parseInt(parseInt(element) % 11);
    if (prev != index) {
        arr[index].display();
        prev = index;
        ar1 = ar1.concat(arr[index].getArray());
    }
    prev = index;
});
//remove the duplicates
let unique = [...new Set(ar1)];
//writes into the file 
fs.writeFile("E://MEAN//text1.txt", unique, (err, data) => {
    if (err) throw err;
});