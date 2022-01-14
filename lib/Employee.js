// Employee class constructor; this is the parent class for all team member classes
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getter methods for the employee parent class
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }
}

// export Employee class
module.exports = Employee;