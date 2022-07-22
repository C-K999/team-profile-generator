const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, gitHub, email, id){
        const position = 'Engineer';

        super(name, position, email, id);

        this.name = name;
        this.email = email;
        this.id = id;
        this.gitHub = gitHub;
        
    }
}

module.exports = Engineer;
