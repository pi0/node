function Animal(name) {
    this.name = name;
}

Animal.prototype.move = function (meters) {
    console.log(this.name + " moved " + meters + "m.");
};


function Snake() {
    var that={};
    Animal.apply(that, Array.prototype.slice.call(arguments));
}

Snake.prototype = new Animal();
Snake.prototype.move = function () {
    console.log("Slithering...");
    Animal.prototype.move.call(this, 5);
};


var sam = new Snake("Sammy the Python");
sam.move();
//
//
// Avoid assigning variables to prototypes
//
var Foo = function (name) { this.name = name; };
Foo.prototype.data = [1, 2, 3]; // setting a non-primitive property
Foo.prototype.showData = function () { console.log(this.name, this.data); };
//
var foo1 = new Foo("foo1");
var foo2 = new Foo("foo2");
//
// both instances use the same default value of data
foo1.showData(); // "foo1", [1, 2, 3]
foo2.showData(); // "foo2", [1, 2, 3]

// // however, if we change the data from one instance
foo1.data.push(4);
//
// // it mirrors on the second instance
// foo1.showData(); // "foo1", [1, 2, 3, 4]
// foo2.showData(); // "foo2", [1, 2, 3, 4]
//
// // Don't construct by returning objects - use prototype and new
//
// function Phone(phoneNumber) {
//     var that = {};
//     // You are constructing a custom object on every call!
//     that.getPhoneNumber = function() {
//         return phoneNumber;
//     };
//     return that;
// };
// // or
// function Phone() {
//     // You are constructing a custom object on every call!
//     return {
//         getPhoneNumber: function() { ... }
//     };
// };
//
