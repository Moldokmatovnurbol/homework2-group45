// var colors = prompt("What is the color?")
//
// switch (colors) {
//     case "red":
//         alert("Stop");
//         break;
//         case "yellow":
//             alert("Wait");
//             break;
//             case "green":
//                 alert("Gooo");
//                 break;
//                 default:
//                     alert("enter color");
// }
// console.log(colors);



// for (let i = 20; i >= 0; i--) {
//     console.log(i)
// }

var arr = [10, 20, 30, 50, 235, 3000];
console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));