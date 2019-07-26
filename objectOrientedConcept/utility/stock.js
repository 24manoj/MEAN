let read = require('readline-sync');
//importing module for file operations
let fs = require('fs');
class stock {
    constructor() {
        this.totalStock = 0;
        this.shareName;
        this.shareNumber;
        this.sharePrice;
    }
}
/*This function read companyname,number of shares,shareprice,assigns to class members,takes no argument*/

stock.prototype.readInp = () => {
    try {
        this.shareName = read.question("Enter Share Name::");
        this.shareNumber = read.questionInt("Enter number of shares::");
        this.sharePrice = read.questionInt("Enter price for the stock::");

    } catch (e) {
        console.log(e);
    }
}
/*This function reads json file,calculates the shares and price,updates the json */
stock.prototype.calulate = () => {
    try {
        let json = JSON.parse(fs.readFileSync("E:/MEAN/objectOrientedConcept/stockReport/stock.json"));
        let msg;
        let price = 0;
        json.forEach(element => {

            if (element.name.includes(this.shareName)) {
                if (parseInt(this.shareNumber) <= parseInt(element.shares)) {
                    price = parseInt(element.price) * parseInt(this.shareNumber);
                    if (parseInt(this.sharePrice) >= price) {
                        element.shares -= parseInt(this.shareNumber);
                        console.log("Stock name ", this.shareName, "  is avaliable");
                        console.log("number of shares :::", this.shareNumber);
                        console.log("Total cost for the share", price);
                        console.log("Remaing amount is ", (this.sharePrice = parseInt(this.sharePrice) - price));
                        msg = " ";

                    } else msg = "You have lesser amount";
                } else msg = "WE dont have much share";
            } else msg = "We dont have shares for this cmpny";
        });
        json = JSON.stringify(json);
        fs.writeFileSync("E:/MEAN/objectOrientedConcept/stockReport/stock.json", json)
        console.log(msg);
        return price;


    } catch (e) {
        console.log(e);
    }
}


module.exports = stock;