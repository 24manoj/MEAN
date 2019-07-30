/********************************************************************************************************************
 * @Execution : default node : cmd>commercialDataProcessingLinkedList.js
 * @Purpose : To learn oops concepts. 
 * @description : Maintain the List of CompanyShares in a Linked List So new CompanyShares can be added or removed easily. 
 * Do not use any Collection Library to implement Linked List.
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 30-july-2019
 *******************************************************************************************************************/
let stock = require('../utility/stockAccount');
let st = new stock();
st.insertToLink();
st.display();