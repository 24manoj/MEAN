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
try {
    const str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016";
    //regular expressionfor number to be 10
    const num = /(^[0-9]{10})/;
    const FNAME = /(^[a-z]*)/;
    let name = read.question("Enter full name:::");
    let NUM = num.exec(read.questionInt("Enter your contact number:::"));
    //.exec is execute the given pattern with string
    let res = FNAME.exec(name);
    let dt = date.create(new Date());
    //to format the date mm/dd/yyy format.
    let format = dt.format('m/d/Y');
    if (res == null || name.length <= 0) throw "Not a proper NAME ";
    if (!NUM) throw "Not a Proper Number";
    str1 = str.replace("<<name>>", res[0]).replace("<<full name>>", name).replace("xxxxxxxxxx", NUM[0]).replace("01/01/2016", format);
    console.log(str1);

} catch (e) {
    console.log(e);
}