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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    User.prototype.userDetails = function () {
        console.log("Hello welcome ".concat(this.name, " and your id number ").concat(this.id));
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));
var user = new User("Mark", 123567);
console.log(user.userDetails());
