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
//reads the name and phone number from users
let readInput = () => {
    let name = read.question("Enter full name:::");
    let num = read.questionInt("Enter your contact number:::");
    if (name.length <= 0) throw "Name cant be null";
    return [name, num];
}
//checks for regExp for name and number ,convert the date to dd/mm/yyy,retruns all the three values,if no string is matching it throws 
//exception to called function
let checkRegExp = (name, number) => {
    //regular expressionfor number to be 10
    const num = /(^[0-9]{10})/;
    const FNAME = /(^[a-z]*)/;
    //.exec is execute the given pattern with string
    let res = FNAME.exec(name);
    let NUM = num.exec(number);
    let dt = date.create(new Date());
    //to format the date mm/dd/yyy format.
    let format = dt.format('m/d/Y');
    if (res == null || name.length <= 0) throw "Not a proper NAME ";
    if (NUM == null) throw "Not a Proper Number";
    return [res, NUM, format];
}
try {
    const str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016";
    let arr = readInput();
    let res = checkRegExp(arr[0], arr[1]);
    //replaces given string with name,phone number,
    str1 = str.replace("<<name>>", res[0][0]).replace("<<full name>>", arr[0]).replace("xxxxxxxxxx", res[1][0]).replace("01/01/2016", res[2]);
    console.log(str1);
} catch (e) {
    //catches if exception occurs
    console.log(e);
}