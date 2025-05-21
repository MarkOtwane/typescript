// build task management system
//2 classes user and task class
//how to connect the two classes
//user class has the user deatils(name, role, id)
//task (creating, updating, delete, retrive)
// admin has a role of assigning task to the users, unassign and retrieve the information
// for th system to run role if the role is admin then display the create,update, delete, retrieve data options (both users and the tasks)
//now it gives two options user details or tasks details(if its user option creating, deleting, updating,retrieve)
//if its task(option creating, deleting, updating,retrieve) then assign 
//when the assign method is called all users are displayed in the terminal
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    User.prototype.userDetails = function () {
        console.log("Enter your name");
    };
    return User;
}());
var user = new User("Mark", 123567);
console.log(user.userDetails());
