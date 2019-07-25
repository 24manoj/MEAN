/********************************************************************************************************************
 * @Execution : default node : cmd> node binaryTree.js
 * @Purpose : To perform operations specified. 
 * @description :A binary tree is a tree which is characterized by any of the following properties:
 * It can be empty (null).
 * It can contain a root node which contain some value and two subtree, left subtree and right subtree, which are also binary tree.
 * A binary tree is a binary search tree (BST) if all the non-empty nodes follows both two properties:
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 22-july-2019
 *******************************************************************************************************************/
require('../utility/catalNumber');
let read = require('readline-sync');
//Taking nth  value
let n = read.questionInt("Enter number");
//(2n C n) / (n+1) cn is combination formula is 2n!/(n)!(2n-n)!/n+1
//to get the number BST posible 
let num = parseFloat((fact(2 * n)) / (fact(n) * fact((2 * n) - n)));
let catal = (num / (n + 1))
console.log(catal);