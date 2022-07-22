const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, email, id);

        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
