// function salam() {
//     console.log("HI");
// }
//
// console.log("A");
// setTimeout(salam,1000);
// console.log("B");


var data = [];
for (let i = 0; i < 5; i++) {
    data[i] = function foo() {
        console.log(i);
    };
}

data[0]();
data[1]();
data[2]();
data[3]();
data[4]();