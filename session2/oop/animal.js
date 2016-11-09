class Animal {
    constructor(opts) {
        //
        // opts ={
        //     ...opts,
        //     name:'foo'
        // };

        this.name = name;
    }

    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}


module.exports = Animal;