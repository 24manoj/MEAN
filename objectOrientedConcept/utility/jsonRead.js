let read = require('readline-sync');
let fs = require('fs');
//Reads JSON file
class JSON {

}
/*readJSON takes no arguments,reads json file parse it to java Script*/
JSON.prototype.readJSON = () => {
    try {
        jsonCon = JSON.parse(fs.readFileSync('../jsonInventory/dataInventory.json'));
        if (isEmptyObject(jsonCon))
            throw "Json is empty";

        return jsonCon;
    } catch (e) {
        console.log(e)
    }
}
/* This function takes no argument,returns true if obj contains no keys*/
JSON.prototype.isEmptyObject = (obj) => {
    return !Object.keys(obj).length;
}

/* Function calculates cost and weights of the inventory ,
Takes no argumnets returns total inventory cost*/
JSON.prototype.calculate = () => {
    try {
        JSON.inventoryCost = 0;
        let jsonCon = readJSON();
        if (isEmptyObject(jsonCon))
            throw "Json is Empty!!Cant Read Null value";
        jsonCon.forEach((ele) => {
            //gets the keys of  the json files
            let key = Object.keys(ele);
            key.forEach(keyele => {
                ele[keyele].forEach(value => {
                    let cost = value.price * value.weight;
                    JSON.inventoryCost += cost;
                    console.log("-----------------------------");
                    console.log(keyele, " name     ::", value.name);
                    console.log(keyele, " weight   ::", value.weight);
                    console.log(keyele, " cost     ::", value.price);
                    console.log("Inventory cost for  ", value.name, " ==>", cost);
                    console.log("-----------------------------");
                });
            });
        });
        console.log("Total inventoryCost is ", JSON.inventoryCost);
    } catch (e) {
        console.log(e);
    }
}

/*This function takes no argument,askes user to enter product name values to be inserted,
converts the array format to json and write into the file*/
JSON.prototype.insertJson = () => {
    try {
        let name = [];
        let weight = [];
        let price = [];
        let i = 0,
            n;
        let jsonCon = readJSON();
        if (isEmptyObject(jsonCon))
            throw "Json is Empty!!Cant Read Null value";

        let product = read.question("Enter product name");
        n = read.question("number of attribute ");
        while (i < n) {
            name[i] = read.question("Name of attribute");
            weight[i] = read.questionInt("weight attribute");
            price[i] = read.questionInt("price of attribute");
            i += 1;
        }
        i = 0;
        let insert = [];
        while (i < n) {
            insert[i] = {
                name: name[i],
                weight: weight[i],
                price: price[i]
            };
            jsonCon.forEach(ele => {
                if (ele[product] === product)
                    throw "product Exist...Changes made";
                ele[product] = insert;
                fs.writeFileSync("E:/MEAN/objectOrientedConcept/inventoryManager/dataInventory.json", (JSON.stringify(ele)));


            });

            i += 1;
        }
    } catch (e) {
        console.log(e);
    }
}

/*This function takes no argument,askes manager to enter product name and attribute need to be removed from inventory*/
JSON.prototype.removeJson = () => {
    try {
        let jsonCon = readJSON();
        if (isEmptyObject(jsonCon))
            throw "Json is Empty!!Cant Read Null value";

        let product = read.question("Enter product name:::")
        let name = read.question("Enter the attribute name to delete:::");
        jsonCon.forEach(element => {
            element[product].forEach(ele => {
                console.log(ele["name"]);
                if (ele["name"] === name) {
                    //delete is an keyword
                    delete ele["name"];
                    delete ele["weight"];
                    delete ele["price"];
                    console.log("Removed sucessfully");
                }
            })

        })
        //writes the updated jsonCon to JSON
        fs.writeFileSync("E:/MEAN/objectOrientedConcept/inventoryManager/dataInventory.json", (JSON.stringify(jsonCon)));
    } catch (e) {
        console.log(e, "Error in Remove");
    }
}

/* Takes no argument,reads input from manager to update the Inventory*/
JSON.prototype.updateJson = () => {
    try {
        let msg;
        let jsonCon = readJSON();
        if (isEmptyObject(jsonCon))
            throw "Json is Empty!!Cant Read Null value";

        let product = read.question("Enter product name");
        let attname = read.question("Enter attribute name");
        let updname = read.question("Enter (name|price|weight) u want to update");
        let attvalue = read.question("Enter Value to update");
        jsonCon.forEach(element => {
            element[product].forEach(ele => {
                if (ele["name"] === attname) {
                    if (updname === "price" || updname === "weight")
                        attvalue = parseInt(attvalue);
                    ele[updname] = attvalue;
                    ms = "";
                } else msg = "Inventory name is improper";
            });
        });
        fs.writeFileSync("E:/MEAN/objectOrientedConcept/inventoryManager/dataInventory.json", (JSON.stringify(jsonCon)));
        throw msg;
    } catch (e) {
        console.log(e, "Problem in update");
    }
}
//Exporting the functions
module.exports = JSON;