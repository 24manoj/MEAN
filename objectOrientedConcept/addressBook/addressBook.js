/********************************************************************************************************************
 * @Execution : default node : cmd>addressBook.js
 * @Purpose : To learn oops concepts. 
 * @description :Create Object Oriented Analysis and Design of a simple Address Book Problem.
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 29-july-2019
 *******************************************************************************************************************/
try {
    let book1 = require('../utility/book');
    let book = new book1();
    let read = require('readline-sync');
    //infinite loop
    for (;;) {
        console.log("\n1.addPerson\n2.editPerson\n3.deletePerson\n4.searchPerson");
        let choice = read.questionInt();
        switch (choice) {
            case 1:
                book.addPerson();
                break;
            case 2:
                book.editPerson();
                break;
            case 3:
                book.deletePerson();
                break;
            case 4:
                book.searchPerson();
                break;
            default:
                process.exit(0);

        }
    }

} catch (e) {
    console.log(e);
}