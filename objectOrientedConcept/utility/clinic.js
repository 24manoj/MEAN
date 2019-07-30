let rw = require('../utility/readwriteJson');
let read = require('readline-sync');
let inc = 0;
class clinic {}
/*This member method takes no argument,reads the json data,
reads input from user,searches for the  doctors ,prints them if found else throws error msg*/
clinic.prototype.searchDoctor = () => {
    try {
        let key;
        let res = false;
        let json = rw.readJson("../cliniqueManagement/doctors.json");
        let search = read.question("You can search doctor..Enter details ");
        json.forEach(element => {
            key = Object.keys(element);
            key.forEach(keyele => {
                if (element[keyele] === search) {
                    res = true;
                    console.log(element);
                }
            });
        });
        if (res === false) {
            throw "No data Found for Search!!Try again ";
        }
    } catch (e) {
        console.log(e)
    }
}
/*This method takes no argument,reads input from user to search patient,if found prints else pops the error msg*/
clinic.prototype.searchPatient = () => {
    try {
        let key;
        let res = false;
        let json = rw.readJson("../cliniqueManagement/patient.json");
        let search = read.question("You can search Patient..Enter details ");

        if (!isNaN(search)) {
            search = parseInt(search);
        }
        json.forEach(element => {
            key = Object.keys(element);
            key.forEach(keyele => {
                if (element[keyele] === search) {
                    res = true;
                    console.log(element);
                }
            })

        });
        if (res === false) {
            throw "No data Found for Search!!Try again ";
        }
    } catch (e) {
        console.log(e)
    }
}

/*This method takes no argument,reads input from user to book the avaliable doctor,if doctor attended more then 5 ,
he will not give appoinement for patient,if appoinment is given ,patient name will be added to doctor list,if patient not exist in file,
he will added to file*/
clinic.prototype.bookAppointment = () => {
    try {
        let key;
        let res = false;
        let json = rw.readJson("../cliniqueManagement/doctors.json");
        let json1 = rw.readJson("../cliniqueManagement/patient.json");
        let patient = read.question("Enter Your name");
        let search = read.question("You can search Doctor..Enter details ");

        if (!isNaN(search)) {
            search = parseInt(search);
        }
        json.forEach(element => {
            key = Object.keys(element);
            key.forEach(keyele => {
                if (element[keyele] === search && res === false) {
                    res = true;
                    if (element["PatientAttend"] < 5) {
                        element["patients"].push({
                            name: patient
                        });
                        console.log(element["Name"], "Confirmed you are appointment.TQ");
                        element["PatientAttend"] += 1;
                    } else throw "Doctor is scheduled for today!!try Different doctor";
                }
            })
        });
        rw.writeJson("../cliniqueManagement/doctors.json", json);

        if (res === false) {
            throw "NO Avaliability of Doctor for your search ";
        }
        if (res === true) {
            json1.forEach(element => {
                key = Object.keys(element);
                key.forEach(keyele => {
                    if (element[keyele] !== patient) {
                        res = false;
                    }
                });
            });
            if (res == false)
                clinic.prototype.addPatient();
        }
    } catch (e) {
        console.log(e)
    }
}
/*This method takes no argument,reads details of patient and updates in file*/
clinic.prototype.addPatient = () => {
    try {
        let name = read.question("Enter Name ::");
        let mobile = read.questionInt("Phone number::");
        let age = read.questionInt("Age ::");
        let insert = {
            Name: name,
            ID: "patient" + inc + 1,
            MobileNumber: mobile,
            Age: age

        }
        let js = rw.readJson("../cliniqueManagement/patient.json");
        js.push(insert);
        rw.writeJson("../cliniqueManagement/patient.json", js)
    } catch (e) {
        Console.log(e)
    }
}

/*This Method takes no argument,checks for the most patient visited doctor,declares him/her as popular,and their specialization*/
clinic.prototype.checkPopular = () => {
    try {
        let js = rw.readJson("../cliniqueManagement/doctors.json");

        let count = js[0].PatientAttend;
        let name = js[0].Name;
        js.forEach(element => {
            let keys = Object.keys(element);
            keys.forEach(keyele => {
                if (element["PatientAttend"] > count) {
                    name = element["Name"];
                    count = element["PatientAttend"];
                    sp = element["Specialization"];
                }
            })
        })

        console.log("Most popular Doctor is ::", name);
        console.log("Doctor Specialization in::", sp);
    } catch (e) {
        Console.log(e)
    }
}

module.exports = clinic;