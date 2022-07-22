//modules and classes
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const HTML_Template = require('./src/HTML_Template');

const memberList = [];

const addManager = () =>{
    return inquirer.prompt([
    {
        type:'input',
        message:'Name of the manager?',
        name: 'manageName'
    },
    {
        type:'input',
        message: "Manager's ID?",
        name: 'manageId'
    },
    {
        type:'input',
        message:"Manager's email?",
        name:'manageEmail'
    },
    {
        type:'input',
        message: "Manager's office number?",
        name:'manageNumber'
    }
    ]).then((response)=>{
        const  { manageName, manageId, manageEmail, manageNumber } = response;
        const manager = new Manager (manageName, manageId, manageEmail, manageNumber); 
        memberList.push(manager);
        console.log(memberList);
    })
}

const add_Employee = () =>{
    return inquirer.prompt([
        {
            type:'input',
            message:'Name of the employee?',
            name: 'name'
        },
        {
            type:'input',
            message: "Employee's ID?",
            name: 'id'
        },
        {
            type:'input',
            message:"Employee's email?",
            name:'email'
        },
        {
            type:'input',
            message:"Employee's position?",
            name:'position'
        },
        {
            type:'input',
            message: "Employee's github username?",
            name:'github'
        },
        {
            type:'input',
            message: "Employee's school?",
            name:'school'
        },
        {
            type: 'confirm',
            name: 'AddEmployee',
            message: 'Would you like to add another member?',
            default: false
        }
    ]).then((response)=>{
        var { name, id, email, position, github, school, AddEmployee } = response;
        var employee;

        if(position.toString().toLowerCase()==='engineer'){
            employee = new Engineer(name, id, email, github);
        }
        if(position.toString().toLowerCase()==='intern'){
            employee = new Intern(name, id, email, school);
        }
        memberList.push(employee);
        console.log(memberList);

        if(AddEmployee){
            return add_Employee(memberList);
        }else{
            return memberList;
        }
    })
}

const output = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Done! Your profile has been created! Please head over to the 'dist' folder!")
        }
    })
};

addManager()
  .then(add_Employee)
  .then(memberList => {
    return HTML_Template(memberList);
  })
  .then(pageHTML => {
    return output(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });