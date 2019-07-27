/********************************************************************************************************************
 * @Execution : default node : cmd>inventoryManager.js
 * @Purpose : To learn oops concepts. 
 * @description : Extend the above program to Create InventoryManager to manage the Inventory.
 *  The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *  The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price ,
 * and then call the Inventory Object to return the JSON String.
 *  The main program will be with InventoryManager
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/

try {
    let obj = require('../utility/jsonRead');
    let read = require('readline-sync');
    let choice;
    for (;;) {
        console.log("\nEnter your choice\n1.Insert JSON\n2.Remove JSON\n3.Update JSON\n4.Calculate JSON\n");
        choice = read.questionInt();
        switch (choice) {
            case 1:
                obj.insertJson();
                break;
            case 2:
                obj.removeJson();
                break;
            case 3:
                obj.updateJson();
                break;
            case 4:
                obj.calculate();
                break;

            default:
                process.exit(0);

        }

    }
} catch (e) {
    console.log(e);
}