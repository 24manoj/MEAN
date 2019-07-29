let q = require('../utility/Queue');
/*Function takes array as argumnet and shuffles the array and return shuffledarray*/
let shuffel = (arr) => {
    try {
        arr.sort(() => Math.random() - 0.5);
        return arr;
    } catch (e) {
        console.log(e);
    }
}
/*This function takes array and number of cards to distribute,
distribute to 4 players all the cards*/
let distribute = (arr3, n) => {
    try {
        let player = [];
        let player2 = [];
        let player3 = [];
        let player4 = [];
        let i = 0;
        while (i < n) {
            player1.push(arr3[i]);
            i += 1;
            player2.push(arr3[i]);
            i += 1;

            player3.push(arr3[i]);
            i += 1;

            player4.push(arr3[i]);
            i += 1;

        }
        return [player1, player2, player3, player4];
    } catch (e) {
        console.log(e);
    }
}

/*This function takes 4,distribute to n number players with k number of cards,
pushes the cards of the each player to queue,sort them according ,prints back*/
let distributeToQueue = (arr3, n, numplayers, rank) => {
    try {
        let i = 0;
        let player = [];
        while (i < numplayers) {
            player[i] = new q();
            i += 1;

        }
        i = 0;
        let j = 0;
        while (j < n) {
            player[i].enQueue(arr3[j]);
            i += 1;
            j += 1;
            if (i >= numplayers)
                i = 0;

        }
        i = 0;

        while (i < numplayers) {
            player[i].sort(rank);
            i += 1;
        }
        i = 0;
        while (i < numplayers) {
            console.log("player ", i + 1);
            player[i].display();
            i += 1;
        }
    } catch (e) {
        console.log(e);
    }
}
/* This function takes two arguments ,one array and string,and prints the cards of each player*/
let display = (arr, str) => {
    try {


        console.log(str, "Having card\n");
        console.log(arr);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    display,
    shuffel,
    distribute,
    distributeToQueue
};