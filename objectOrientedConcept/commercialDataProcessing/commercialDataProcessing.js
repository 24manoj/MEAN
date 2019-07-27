/********************************************************************************************************************
 * @Execution : default node : cmd>commericalDataProcessing.js
 * @Purpose : To learn oops concepts. 
 * @description : Implements a data type that might be used by a financial institution to keep track of customer information.
 * also maintains a list of CompanyShares object which has Stock Symbol and Number of Shares as well as DateTime of the transaction. 
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 27-july-2019
 *******************************************************************************************************************/
let stock = require('../utility/stockAccount')
//creating class object
let st = new stock();
st.buy(1000, "abhi");
st.valueOf();
st.sell(1000, "yathin");