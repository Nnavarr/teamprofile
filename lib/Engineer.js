// import employe parent class
const Employee = require('./Employee');

// create Manager class that takes from the Employee parent
class Engineer extends Employee {
    constructor(name, id, email, github){
        // use the same assignment as parent
        super(name, id, email);
        this.github = github;
    }
   
    getGithub(){
        return this.github;
    }

    // override the return to 'Manager' instead of default Employee 
    getRole(){
        return 'Engineer';
    }
}

