/*
Simple Balanced Parentheses

a.Desc -> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
where parentheses are used to order the performance of operations.
b.Ensure parentheses must appear in a balanced fashion.
c.I/P -> read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
d.Logic -> Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. At the End of the Expression if the Stack is Empty then the   Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(), pop(), peak(), isEmpty(), size()
e.O/P -> True or False to Show Arithmetic Expression is balanced or not.
*/
/*
file name: balancedParanthesis
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/*This program takes the input from user,splits the input,
for each '(' push to stack ,for each')' pop from the stack.*/
/*--->Importing modules */
let read=require('readline-sync');
let st=require('../utility/stack');
let clsvar=new st();
//let pat=new RegExp(/(\[)([:alnum:].*[:alnum:]+)\]|(\()([:alnum:]+)\)|(\{)([:alnum:]+)\}/);
let str=read.question("Enter arthematic Expression:");
//if(!pat.exec(str)) console.log("Not a proper expression");

//Reading input from keyboard.
module.exports=balanc=(str)=>
{
//invoking constructor of class stack.
let res=false;
if(str.length === 0 || str===undefined ||str===NaN|| str.length<2)
{ 
    console.log("NOt a proper Expression");
    return;
}
str=str.split('');
clsvar.stack();
let  inc=0;
str.forEach(element =>
    {
        if(element=='(')
        {
            inc+=1;
            clsvar.push(element);
        }
        else if(element==')')
        {  res=true;
            inc-=1;
            clsvar.pop();
        }
    });
    //checks for is empty,inc to be zero and input length not be even.
    if(clsvar.isEmpty() && inc==0 && res===true)
    console.log(" Expression is BAlanced");
    else 
    console.log("Expression is not Balanced");

}
balanc(str);