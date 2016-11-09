const Animal = require('./animal');

class Snake extends Animal{

    constructor(name) {
        super(name);
        this.name=name;
    }

    move() {
        console.log("Slithering...");

         Animal.prototype.move.call(this, 5);
         Snake.prototype.move.call(this, 5);
        // this.move.call(this,5);
        // this.prototype.move.call(this,5);
    }

}

//
// var a = [];
// a.prototype.

// -----------------------

var s = new Snake('my snake');
s.move();


//
// myopt= {
//     // name:'1234',
// }
//
// new Animal(myopt);
//
// myopt.name=?
//
//
//
//
//
//
//