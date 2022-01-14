// import employe parent class
const Employee = require('./Employee');

// create Manager class that takes from the Employee parent
class Intern extends Employee {
    constructor(name, id, email, school){
        // use the same assignment as parent
        super(name, id, email);
        this.school = school;
    }
   
    getSchool(){
        return this.school;
    }

    // override the return to 'Manager' instead of default Employee 
    getRole(){
        return 'Intern';
    }
}
