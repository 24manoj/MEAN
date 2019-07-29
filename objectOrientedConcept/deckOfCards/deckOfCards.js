/********************************************************************************************************************
 * @Execution : default node : cmd>deckOfCards.js
 * @Purpose : To learn oops concepts. 
 * @description : to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") & 
 * Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *  Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and 
 * Print the Cards the received by the 4 Players using 2D Array…
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 29-july-2019
 *******************************************************************************************************************/
try {
    let dec1 = require('../utility/deckOfCards');
    let dec = new dec1();
    let arr1 = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let arr2 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    let arr3 = [];
    arr1.forEach(ele => {
        arr2.forEach(e => {
            arr3.push(e + "  of " + ele);
        })

    })
    arr3 = dec.shuffel(arr3);
    let res = dec.distribute(arr3, 36);
    dec.display(res[0], "Player1");
    dec.display(res[1], "Player2");
    dec.display(res[2], "Player3");
    dec.display(res[3], "Player4");


} catch (e) {
    console.log(e);
}