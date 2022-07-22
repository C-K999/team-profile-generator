const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, school, email, id){
        const position = 'Intern';

        super(name, position, email, id);

        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
    }
}

module.exports = Intern;