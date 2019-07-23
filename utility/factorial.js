/**
 This file contains all the sub methos.
 */
/*
file name: catalNumber
created: 22-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/* Finds the factorial of given number*/
module.exports= fact=(n)=>
{
    if(n==0) return 1;
    return n*fact(n-1);
}