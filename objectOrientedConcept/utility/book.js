let read = require('readline-sync');
let rw = require('./readwriteJson');
let path = "E:\\/MEAN/objectOrientedConcept/addressBook/addressBook.json";
class Book {
    constructor()
    {
 this.json=null;
    }
}
/*addPerson takes no argument,reads the inputs from user,writes to json file*/
Book.prototype.addPerson = () => {
    try {
        let name = read.question("Enter Name of Person::");
        let address = read.question("Enter Address of Person::");
        let city = read.question("City of Person::");
        let state = read.question("Enter state of person::");
        let pincode = read.questionInt("Enter Pincode::");
        let insert = {
            name: name,
            address: address,
            city: city,
            state: state,
            pincode: pincode
        }
        //read json
         json = rw.readJson(path);
        json.push(insert);
        //write to json
        rw.writeJson(path, json);
    } catch (e) {
        console.log(e)
    }
}
/*editPerson takes no argument,reads the changes need from the user ,wirtes back to json file*/
Book.prototype.editPerson = () => {
    try {

        let key = read.question("Enter  key to find the person::");
        if (!isNaN(key)) key = parseInt(key);
         json = rw.readJson(path);
        let res = false;
        json.forEach(element => {
            let keys = Object.keys(element);
            keys.forEach(keyele => {
                if (element[keyele] === key) {
                    res = true;
                    let change = read.question("Enter what to edit::");
                    let value = read.question(" Enter Changes::")
                    if (change === "pincode")
                        element[change] = parseInt(value);
                    else
                        element[change] = value;
                }

            });
        });
        if (res == false) console.log("Key not found!!Try with different one");
        else {
            rw.writeJson(path, json);
        }
    } catch (e) {
        console.log(e);
    }
}
/*deletePerson takes no argumnet,reads the detail of person to delete from user,delete that person if exist,update the json*/
Book.prototype.deletePerson = () => {
    try {
        let key = read.question("Enter Details  to  delete Person::");
        if (!isNaN(key)) key = parseInt(key);
         json = rw.readJson(path);
        let res = false;
        json.forEach(element => {
            let keys = Object.keys(element);
            keys.forEach(keyele => {
                if (element[keyele] === key) {
                    res = true;
                    json = json.filter(ele => ele[keyele] != key);

                }
            });

        });
        if (res == false) console.log("Key not found!!Try with different one");
        else {
            rw.writeJson(path, json);
        }


    } catch (e) {
        console.log(e);
    }
}
/*searchPerson takes no argument,reads the key from user to search the person,if exist perints the details ,else gives an error msg*/
Book.prototype.searchPerson = () => {

    try {
        let key = read.question("Enter key to serach:::");
        if (!isNaN(key)) key = parseInt(key);
         json = rw.readJson(path);
        let res = false;
        json.forEach(element => {
            let keys = Object.keys(element);
            keys.forEach(keyele => {
                if (element[keyele] === key) {
                    res = true;
                    console.log(element);

                }
            });

        });
        if (res == false) console.log("NO match for key!!!Try Some other");

    } catch (e) {
        console.log(e);
    }
}
module.exports = Book;