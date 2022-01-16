// import employe parent class
const Employee = require('./Employee');

// create Manager class that takes from the Employee parent
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // use the same assignment as parent
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // override the return to 'Manager' instead of default Employee 
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
