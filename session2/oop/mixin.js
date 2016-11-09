function Foo() {
}
Foo.prototype.bar = function () {
};
Foo.prototype.baz = function () {
};

// mixin - augment the target object with the Foo functions
Foo.mixin = function (destObject) {
    ['bar', 'baz'].forEach(function (property) {
        destObject.prototype[property] = Foo.prototype[property];
    });
};

// ------------------------------------------------------------------------------

function Bdsdsdar() {
}
Bdsdsdar.prototype.qwerty = function () {
};

// mixin Foo
Foo.mixin(Bdsdsdar);


console.log("Salam".red);