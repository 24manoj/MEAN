/********************************************************************************************************************
 * @Execution : default node : cmd>cliniqueManagment.js
 * @Purpose : To learn oops concepts. 
 * @description :This programme is used to manage a list of Doctors associated with the Clinique. 
 * This also manages the list of patients who use the clinique. 
 * It manages Doctors by Name, Id,Specialization and Availability (AM,  PM or both). 
 * It manages Patients by Name, ID, Mobile Number and Age. 
 * The Program allows users to search Doctor by name, id, Specialization or Availability. 
 * Also the programs allows users to search patient by name, mobile number or id. 
 * The programs allows patients to take appointment with the doctor.
 * A doctor at  any availability time can see only 5 patients. 
 * If exceeded the user can take appointment for patient at different date or availability time.
 * Print the Doctor Patient Report. 
 * Also show which Specialization is popular in the Clinique as well as which Doctor is popular
 * @overview : objectOrientedConcepts  
 * @author : manoj kumar k s <manoj.ks.24.mk@gmail.com>
 * @version : 1.0
 * @since : 30-july-2019
 *******************************************************************************************************************/
let clinique = require('../utility/clinic');
let read = require('readline-sync');

try {
    //creating a class object
    let clnic = new clinique();
    let choice;
    //infinite loop
    for (;;) {
        console.log("\n1.searchDoctor\n2.searchPatient\n3.Book An Appoinment\n4.PopularDoctor\n");
        choice = read.questionInt();
        switch (choice) {
            case 1:
                clnic.searchDoctor();
                break;
            case 2:
                clnic.searchPatient();
                break;
            case 3:
                clnic.bookAppointment();
                break;
            case 4:
                clnic.checkPopular();
                break;
            default:
                process.exit(0);
        }

    }

} catch (e) {
    console.log(e);
}