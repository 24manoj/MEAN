/********************************************************************************************************************
 * @Execution : default node : cmd> regularExpression.js
 * @Purpose : To learn oops concepts. 
 * @description : Read in the following message: 
 * Hello <<name>>, We have your full name as <<full name>> in our system. 
 * your contact number is 91-xxxxxxxxxx.
 *  Please,let us know in case of any clarification,Thank you BridgeLabz 01/01/2016. 
 * Use Regex to replace name, full name, Mobile#, and Date with proper value.
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
let read = require('readline-sync');
let date = require('node-datetime');
let reg = require('../utility/regularExp');
let regExp = new reg();
try {
    const str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016";
    let arr = regExp.readInput();
    let res = regExp.checkRegExp(arr[0], arr[1]);
    //replaces given string with name,phone number,
    str1 = str.replace("<<name>>", res[0][0]).replace("<<full name>>", arr[0]).replace("xxxxxxxxxx", res[1][0]).replace("01/01/2016", res[2]);
    console.log(str1);
} catch (e) {
    //catches if exception occurs
    console.log(e);
}