//generics one fuction can take different datatypes
function getStringArray(items) {
    console.log(items);
    return items.slice();
}
function getNumberArray(items) {
    console.log(items);
    return items.slice();
}
// getStringArray(["mark", "Jone", "king david"])//parameter it takes an array of strings
// getNumberArray([1,2,3,4,5,6,7,8,9])
// GENERICS
function getArray(items) {
    console.log(items);
    return items.slice();
}
getArray(["mark", "come"]);
getArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// example 2
function getProperty(obj, key) {
    return obj[key]; //dot notation/bracket notation
}
//objects
var user = {
    id: "123e3dece",
    name: "mark",
    email: "mark@",
    password: "123qweErqr@#$$",
    profileImg: "mak.png"
};
//attempt to get properties
//obj user key includes id, name, email, password, profile image
// same like user.id applicable in large software create where you dpon't have access or you don't know the objc
console.log(getProperty(user, "email"));
var welcome = "Hello World";
var st = "Said account is active true"; //what yoou extect assuming you know the data of a certain api key 
