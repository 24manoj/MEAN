/********************************************************************************************************************
 * @Execution : default node : cmd> balancedParanthesis.js
 * @Purpose : To perform operations specified. 
 * @description : Desc -> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
 * where parentheses are used to order the performance of operations.
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 22-july-2019
 *******************************************************************************************************************/
/*--->Importing modules */
let read = require('readline-sync');
let st = require('../utility/stack');
let clsvar = new st();
let str = read.question("Enter arthematic Expression:");
//Reading input from keyboard.
module.exports = balanc = (str) => {
    //invoking constructor of class stack.
    let res = false;
    if (str.length === 0 || str === undefined || str === NaN || str.length < 2) {
        console.log("NOt a proper Expression");
        return;
    }
    str = str.split('');
    clsvar.stack();
    let inc = 0;
    str.forEach(element => {
        if (element == '(') {
            inc += 1;
            clsvar.push(element);
        } else if (element == ')') {
            res = true;
            inc -= 1;
            clsvar.pop();
        }
    });
    //checks for is empty,inc to be zero and input length not be even.
    if (clsvar.isEmpty() && inc == 0 && res === true)
        console.log(" Expression is BAlanced");
    else
        console.log("Expression is not Balanced");

}
balanc(str);