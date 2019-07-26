try {
    let read = require('readline-sync');
    let fs = require('fs');
    let n, arr = [],
        jsonCon;
    //Reads JSON file
    let json = fs.readFileSync('../jsonInventory/dataInventory.json');

    let readJSON = () => {
        //Convert JSON file to JavaScript format
        if (isEmptyObject(json))
            throw "Json is empty";
        jsonCon = JSON.parse(json);
    }
    let isEmptyObject = (obj) => {
        return !Object.keys(obj).length;
    }

    /* Function calculates cost and weights of the inventory*/
    let calculate = () => {
        JSON.inventoryCost = 0;
        jsonCon.forEach((ele) => {
            ele.rice.forEach(value => {
                let cost = value.price * value.weight;
                JSON.inventoryCost += cost;
                console.log("-----------------------------");
                console.log("Rice name     ::", value.name);
                console.log("Rice weight   ::", value.weight);
                console.log("Rice cost     ::", value.price);
                console.log("Inventory cost for  ", value.name, " ==>", cost);
                console.log("-----------------------------");
            });
            ele.pulses.forEach(value => {
                let cost = value.price * value.weight;
                JSON.inventoryCost += cost;
                console.log("-----------------------------");
                console.log("pulses name     ::", value.name);
                console.log("pulses weight   ::", value.weight);
                console.log("pulses cost     ::", value.price);
                console.log("Inventory cost for  ", value.name, " ==>", cost);
                console.log("-----------------------------");
            });
            ele.wheat.forEach(value => {
                let cost = value.price * value.weight;
                JSON.inventoryCost += cost;
                console.log("-----------------------------");
                console.log("wheat name     ::", value.name);
                console.log("wheat weight   ::", value.weight);
                console.log("wheat cost     ::", value.price);
                console.log("Inventory cost for  ", value.name, " ==>", cost);
                console.log("-----------------------------");
            });
        });
        console.log("Total inventoryCost is ", JSON.inventoryCost);
    }
    module.exports = {
        readJSON,
        calculate
    };
} catch (e) {
    console.log(e);
}