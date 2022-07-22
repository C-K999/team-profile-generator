const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){

        super(name, email, id);

        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    }
    getOfficeNum(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;