class regular {
    constructor() {
        //regular expressionfor number to be 10
        const num = /(^[0-9]{10})/;
        const FNAME = /(^[a-z]*)/;
    }

}
//reads the name and phone number from users
regular.prototype.readInput = () => {
    let name = read.question("Enter full name:::");
    let num = read.questionInt("Enter your contact number:::");
    if (name.length <= 0) throw "Name cant be null";
    return [name, num];
}
/*checks for regExp for name and number ,convert the date to dd/mm/yyy,retruns all the three values,if no string is matching it throws 
exception to called function*/
regular.prototype.checkRegExp = (name, number) => {
    try {
        //.exec is execute the given pattern with string
        let res = this.FNAME.exec(name);
        console.log(res);
        let NUM = this.num.exec(number);
        let dt = date.create(new Date());
        //to format the date mm/dd/yyy format.
        let format = dt.format('m/d/Y');
        if (res === null || name.length <= 0) {
            throw "Not a proper NAME ";
            return;
        }
        if (NUM === null) {
            throw "Not a Proper Number";
            return;
        }
        return [res, NUM, format];
    } catch (e) {
        console.log(e);
    }
}
module.exports=regular;