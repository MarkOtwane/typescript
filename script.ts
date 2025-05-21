//generics one fuction can take different datatypes
function getStringArray(items:string[]){
    console.log(items);
    
    return items.slice();
}

function getNumberArray( items: number[]): number[]{
    console.log(items);
    
    return items.slice()
}

// getStringArray(["mark", "Jone", "king david"])//parameter it takes an array of strings
// getNumberArray([1,2,3,4,5,6,7,8,9])

// GENERICS
function getArray<K>(items: K[]): K[]{
    console.log(items);
    return items.slice()
    
}
getArray(["mark", "come"])
getArray([1,2,3,4,5,6,7,8,9])

// one more example in generics
//we use generics to receive api response  backend
interface ApiResponse<T>{
    data:T; //naming convention
    status:'success' | 'error';
    timestamp: number;
}

interface User{
    id:string;
    name:string;
    password:string;
    email:string
    profileImg:string;
}

interface Product1{
    id:string;
    name:string;
    price:number;
    quantity:number;
    reviews:string;
    rating:number;
    inStock: true
}
//now our apiresponse takes data user then status success or error then timespam date
type UserResponse = ApiResponse<User>;
type ProductResponse = ApiResponse<Product1>


// keyof retrieve the interface of key user(give access of interface user)
type userKeys = keyof User;

// example 2
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key] //dot notation/bracket notation
}
//objects
const user : User = {
    id:"123e3dece",
    name:"mark",
    email:"mark@",
    password:"123qweErqr@#$$",
    profileImg:"mak.png"
};
//attempt to get properties
//obj user key includes id, name, email, password, profile image

// same like user.id applicable in large software create where you dpon't have access or you don't know the objc
console.log(getProperty(user, "email"));



// CONDITIONAL TYPES if else 
type isString<T> = T extends string? true:false;//use ternary operator many times

type Test1 = isString<string>;

type Test2 = isString<number>
type Test3 = isString<"hello world">

// MAPPED TYPES(transformation algorithm applied to every type)
type MakeOptional<T> ={
    [L in keyof T]? : T[L];
};

//interface user derive new type where everything is optional get usrerinfo and make it optional
type OptionalUser = MakeOptional<User>

//transformation to make evrything a string
type Stringify<T> = {
    [K in keyof T]:string;//key of the given / input object
}

type UploadProduct = Stringify<Product1>

//make everything nullable
type Nullable<T> = {
    [K in keyof T] : T[K] | null //specific value to a null
}
type NullableProduct = Nullable<Product1>

// TEMPLATE LITERALS bring the power of template string to template set apis that are typeset

type Greeting = `Hello ${string}` //static definition like this is a string
const welcome: Greeting = "Hello World"

type isActive = `Said account is active ${boolean}`;
const st: isActive = `Said account is active true` //what yoou extect assuming you know the data of a certain api key 



