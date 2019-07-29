/********************************************************************************************************************
 * @Execution : default node : cmd>deckOfCards.js
 * @Purpose : To learn oops concepts. 
 * @description : program to create a Player Object having Deck of Cards, and having ability to Sort by Rank and maintain the cards in a Queue implemented using Linked List. 
 * Do not use any Collection Library. Further the Player are also arranged in Queue. 
 * Finally Print the Player and the Cards received by each Player.
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 29-july-2019
 *******************************************************************************************************************/
try {
    let dec = require('../utility/deckOfCards');
    // variable  declaration
    let arr1 = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let arr2 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    let arr3 = [];
    arr1.forEach(ele => {
        arr2.forEach(e => {
            arr3.push(e + "  of " + ele);
        })

    })
    arr3 = dec.shuffel(arr3);
    dec.distributeToQueue(arr3, 36, 4, arr2);

} catch (e) {
    console.log(e);
}