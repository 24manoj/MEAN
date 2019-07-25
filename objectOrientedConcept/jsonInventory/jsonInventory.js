/********************************************************************************************************************
 * @Execution : default node : cmd> jsonInventory.js
 * @Purpose : Read json files and perform operations. 
 * @description : Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg.
 * @overview : dataStructure  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 25-july-2019
 *******************************************************************************************************************/

try {
    let obj = require('../utility/jsonRead');
    obj.readJSON();
    obj.calculate();
} catch (e) {
    console.log(e);
}