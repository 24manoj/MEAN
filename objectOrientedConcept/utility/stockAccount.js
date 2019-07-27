/*Importing modules and declaring global varaibles*/
let fs = require('fs');
let rw = require('../utility/readwriteJson');
let path = "E:/MEAN/objectOrientedConcept/commercialDataProcessing/memberShares.json";
let path1 = "E:/MEAN/objectOrientedConcept/commercialDataProcessing/companyShares.json";
/*Creating empty class*/
class stockAccount {

}
/*Note:prototype makes changes to class module,
adding members functions using prototype*/
/*Takes name as the argument,adds to companyShares json file*/
stockAccount.prototype.addAccount = (name) => {
    try {
        let jsonCon = rw.readJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/memberShares.json");
        jsonCon.forEach(element => {
            element[name] = [];
        });

        rw.writeJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/memberShares.json", jsonCon);
    } catch (e) {
        console.log(e);
    }
}
/*Takes two arguments amt and username,calculates the shares amt divided by price,
updates the memberSahres and comapnyShares json file*/

stockAccount.prototype.buy = (amt, username) => {
    try {
        let shares = 0;
        let date;
        let cmpy = rw.readJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/companyShares.json");
        cmpy.forEach(element => {
            element["ABC"].forEach(ele => {

                shares = parseInt(amt / parseInt(ele["price"]));
                if (ele["shares"] >= shares) {
                    ele["shares"] -= shares;
                    date = new Date();
                    ele["Time"] = date;
                    rw.writeJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/companyShares.json", cmpy);
                } else {
                    throw "No Shares avaliable";
                }
            });
        });
        let insert = {
            companyName: "ABC",
            shares: shares,
            Amount: amt,
            Time: date
        };
        let jsonCon = rw.readJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/memberShares.json");
        jsonCon.forEach(ele1 => {
            b = false;
            ele1[username].forEach(ele2 => {
                if (ele2["companyName"] === "ABC") {
                    b = true;
                    ele2["shares"] += shares;
                    ele2["Amount"] += amt;
                    ele2["Time"] = date;
                }

            });
            if (b == false) ele1[username].push(insert);


        })
        rw.writeJson("E:/MEAN/objectOrientedConcept/commercialDataProcessing/memberShares.json", jsonCon);

    } catch (e) {
        stockAccount.prototype.addAccount(username);
        stockAccount.prototype.buy(amt, username);
    }
}

/* Takes no arguments calculates the total cost of all shares and outputs cost*/
stockAccount.prototype.valueOf = () => {

    try {
        let jsonCon = rw.readJson(path);
        JSON.inventoryCost = 0;
        jsonCon.forEach((ele) => {
            //gets the keys of  the json files
            let key = Object.keys(ele);
            key.forEach(keyele => {
                ele[keyele].forEach(value => {
                    let cost = value.Amount;
                    JSON.inventoryCost += cost;
                    console.log("-----------------------------");
                    console.log("Shares cost for  ", keyele, " ==>", cost);
                    console.log("-----------------------------");
                });
            });
        });
        console.log("Total inventoryCost is ", JSON.inventoryCost);
    } catch (e) {
        console.log(e);
    }
}
/*Takes two argument amt and username,sells the shares and updates memberShares json*/
stockAccount.prototype.sell = (amt, username) => {
    try {
        let cmpny = rw.readJson(path1);
        let shares;
        cmpny.forEach(element => {
            element["ABC"].forEach(ele => {
                shares = parseInt(amt / parseInt(ele["price"]));
            });
        });
        let member = rw.readJson(path);
        member.forEach(element => {
            element[username].forEach(ele => {
                if (ele["companyName"] == "ABC") {
                    ele["shares"] -= shares;
                    ele["Amount"] -= amt;
                }

            })
        })

        rw.writeJson(path, member);
        console.log("You sold u r  ", shares, " shares ");

    } catch (e) {
        console.log(e);
    }
}
module.exports = stockAccount;