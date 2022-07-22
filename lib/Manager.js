const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, officeNum, email, id){
        const position = 'Manager';

        super(name, position, email, id);

        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNum = officeNum;
    }
}

module.exports = Manager;