/*
A binary tree is a tree which is characterized by any of the following properties:

It can be empty (null).
It can contain a root node which contain some value and two subtree, left subtree and right subtree, which are also binary tree.
A binary tree is a binary search tree (BST) if all the non-empty nodes follows both two properties:

If node has a left subtree, then all the values in its left subtree are smaller than the value of the current node.
If node has a right subtree, then all the value in its right subtree are greater than the value of the current node.
You are given N nodes, each having unique value ranging from [1, N], how many different binary search tree can be created using all of them.*/
/*
file name:binaryTree
created: 22-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
require('../utility/catalNumber');
let read=require('readline-sync');
//Taking nth  value
let n=read.questionInt("Enter number");
//(2n C n) / (n+1) cn is combination formula is 2n!/(n)!(2n-n)!/n+1
//to get the number BST posible 
let num= parseFloat((fact (2*n)) / (fact (n) * fact ((2*n) - n) ));
let catal=(num/(n+1))
console.log(catal);