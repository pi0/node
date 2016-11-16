// // function async(fn) {
// //     setTimeout(fn, 0);
// // }
// //
// // function func(callback,opts) {
// //     async(()=> {
// //         callback({
// //             data: "Hello world",
// //             error: false,
// //         });
// //     });
// // }
// //
// //
// // func(function (data) {
// //     console.log(data)
// // })
//
//
// async function func(a, b) {
//     return new Promise((resolve, reject)=> {
//         // Async
//         if (b == 0) {
//             reject("Divide by 0!");
//         }
//         resolve(a / b);
//     });
// }
//
// var p = await func(2, 0);
//
// //..
//
// p.then(result=> {
//     console.log(result);
// }).catch(reason=> {
//     console.log("Error: "+reason)
// });