// build task management system
//2 classes user and task class
//how to connect the two classes
//user class has the user deatils(name, role, id)
//task (creating, updating, delete, retrive)
// admin has a role of assigning task to the users, unassign and the information
// for th system to run role if the role is admin then display the create,update, delete, retrieve data options (both users and the tasks)
//now it gives two options user details or tasks details(if its user option creating, deleting, updating,retrieve)
//if its task(option creating, deleting, updating,retrieve) then assign 
//when the assign method is called all users are displayed in the terminal

//ecommerce example
//iunterface
interface PersonalInfo{
    firstName:string;
    lastName:string;
    email:string;
    profileImg?:string  //optional like not a requirement
}

interface Address{
    street:string;
    city:string;
    zipcode:string;
    country:string;
}

interface AccountInfo{
    userID:string;
    createdAr:Date;
    isActive:boolean
}

type Customer = PersonalInfo & Address & AccountInfo; //union (|) and intersection(&)
const customer: Customer ={ 
    //Personal Info properties
    firstName:"Mark",
    lastName:"Otwane",
    email:"otwanemark254@gmail.com",
    profileImg:"profile.jpeg",

    //Address properties
    street:"Kamar",
    city:"Nakuru",
    zipcode:"123456",
    country:"Kenya",

    //Account properties
    userID:"uesr1",
    createdAr: new Date(),
    isActive:true,
}


//something for the product

interface Track {
    track():void
}

interface Save{
    save(): Promise<void>
}

type OrderDto = Track & Save; //intersection

class Order implements OrderDto{
    constructor(public orderId:string, public amount:number) {}
        track():void{
            console.log(`Tracking order${this.orderId}`);
            
        }
         async save(){
            console.log(`${this.orderId}`);
            
        
    }
}

const order = new Order("qwer234", 5000);

order.track();
order.save();

type PaymentAmount = string | number;

function processPayment(amount: PaymentAmount){
    if(typeof amount === "string"){ // tells the type of the data type
        const charge = parseFloat(amount) * 2.5 //conversion of string to number parse 
        console.log(charge);
        
    }
    else{
        const charge = amount *2.5;
        console.log(charge);
        
    }
}

interface CreditCardPayment{
    type: "creditCard"; //staytic declaration
    cardNumber: string;
    expiryDate: string;
}

interface PayPalPayment{
    type:"paypal";
    email:string;
}

interface BankPayment{
    type:"bank";
    accountNumber: string;
    routingNumber: string;

}

type Payment = CreditCardPayment | PayPalPayment | BankPayment;

function validatePayment (payment: Payment){
    if ("cardNumber" in payment) {
        console.log(`processing card payment for the cad ending in ${payment.cardNumber.slice(-4)}`); //last 4 number array
        
    }
    else if("email" in payment){  //using the in like to check if a method or element is 
        console.log(`Processing paypal payment for user with email ${payment.email}`);
        
    }
    else{
        console.log(`Process bank tranfer for account number ${payment.accountNumber}`)
    }
}

// validatePayment("otwanemark254@gmail.com") call the responsible objects
const  paypal: PayPalPayment ={
    type:"paypal",
    email:"mark"
}
validatePayment(paypal) 

class Product {
    constructor(public id:string, public name: string){

    }
}


//class to handle digital product while shipping
class DigitalProduct extends Product{
    constructor(id:string, name:string, downloadUrl:string){
        super(id, name)
    }
}

class PhysicalProducts extends Product{
    constructor(id:string, name:string, public weight:string){
        super(id,  name)
    }
}

// function to calculate shipping
function calculateShipping(product:Product) : number{
    if(product instanceof DigitalProduct){ //instance of

        return 0;
    }
    else if (product instanceof PhysicalProducts){ //takes a snapshot of something
        return Number(product.weight) * 5;
        
    }
    else{
        return 2
    }
}

//type casting

interface ProductData{
    id:string;
    name:string;
    price:number;
    category:string;
}

//function to iterate
function fetchProduct(): unknown{
    return{
        id:"1234ere",
        name:"Lenovo",
        price:80000,
        category: "Electronic"
    }
}

//functions to play around with that data
function processProduct(){
    const data = fetchProduct();
    //as key word
    const product = data as ProductData; //type casting sample 1

    //second instance of type casting
    const product2 = <ProductData>data;
    console.log(product);

    console.log(product2);
    
    
}

// processProduct()

//is much safer to use type guard
 function isProductdata(data: unknown): data is ProductData{
    return typeof data  === "object" && 
    data !== null &&
    typeof (data as any).id === "string" &&
    typeof (data as any).name === "string" &&
    typeof (data as any).price === "number"
 }

 function safeProcessProduct(){
    const data = fetchProduct();

    if(isProductdata(data)){
        console.log(`Product: ${data.name}, Price: ${data.price}, Category: ${data.category}`); //make sure data returned is what we expected
        
    }
    else{
        console.log(`Invalid product data received`);
        
    }
 }

 safeProcessProduct();