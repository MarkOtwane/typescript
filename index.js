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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var customer = {
    //Personal Info properties
    firstName: "Mark",
    lastName: "Otwane",
    email: "otwanemark254@gmail.com",
    profileImg: "profile.jpeg",
    //Address properties
    street: "Kamar",
    city: "Nakuru",
    zipcode: "123456",
    country: "Kenya",
    //Account properties
    userID: "uesr1",
    createdAr: new Date(),
    isActive: true,
};
var Order = /** @class */ (function () {
    function Order(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }
    Order.prototype.track = function () {
        console.log("Tracking order".concat(this.orderId));
    };
    Order.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("".concat(this.orderId));
                return [2 /*return*/];
            });
        });
    };
    return Order;
}());
var order = new Order("qwer234", 5000);
order.track();
order.save();
function processPayment(amount) {
    if (typeof amount === "string") { // tells the type of the data type
        var charge = parseFloat(amount) * 2.5; //conversion of string to number parse 
        console.log(charge);
    }
    else {
        var charge = amount * 2.5;
        console.log(charge);
    }
}
function validatePayment(payment) {
    if ("cardNumber" in payment) {
        console.log("processing card payment for the cad ending in ".concat(payment.cardNumber.slice(-4))); //last 4 number array
    }
    else if ("email" in payment) { //using the in like to check if a method or element is 
        console.log("Processing paypal payment for user with email ".concat(payment.email));
    }
    else {
        console.log("Process bank tranfer for account number ".concat(payment.accountNumber));
    }
}
// validatePayment("otwanemark254@gmail.com")
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    return Product;
}());
//class to handle digital product while shipping
var DigitalProduct = /** @class */ (function (_super) {
    __extends(DigitalProduct, _super);
    function DigitalProduct(id, name, downloadUrl) {
        return _super.call(this, id, name) || this;
    }
    return DigitalProduct;
}(Product));
var PhysicalProducts = /** @class */ (function (_super) {
    __extends(PhysicalProducts, _super);
    function PhysicalProducts(id, name, weight) {
        var _this = _super.call(this, id, name) || this;
        _this.weight = weight;
        return _this;
    }
    return PhysicalProducts;
}(Product));
// function to calculate shipping
function calculateShipping(product) {
    if (product instanceof DigitalProduct) { //instance of
        return 0;
    }
    else if (product instanceof PhysicalProducts) { //takes a snapshot of something
        return Number(product.weight) * 5;
    }
    else {
        return 2;
    }
}
//function to iterate
function fetchProduct() {
    return {
        id: "1234ere",
        name: "Lenovo",
        price: 80000,
        category: "Electronic"
    };
}
//functions to play around with that data
function processProduct() {
    var data = fetchProduct();
    //as key word
    var product = data; //type casting sample 1
    //second instance of type casting
    var product2 = data;
    console.log(product);
    console.log(product2);
}
// processProduct()
//is much safer to use type guard
function isProductdata(data) {
    return typeof data === "object" &&
        data !== null &&
        typeof data.id === "string" &&
        typeof data.name === "string" &&
        typeof data.price === "number";
}
function safeProcessProduct() {
    var data = fetchProduct();
    if (isProductdata(data)) {
        console.log("Product: ".concat(data.name, ", Price: ").concat(data.price, ", Category: ").concat(data.category)); //make sure data returned is what we expected
    }
    else {
        console.log("Invalid product data received");
    }
}
safeProcessProduct();
