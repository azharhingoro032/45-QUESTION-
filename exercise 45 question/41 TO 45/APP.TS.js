// EXERCISE 41
// let magicians: string[] = ["David Copperfield", "David Blaine", "Dynamo"];
// function show_magicians(magicians: string[]){
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// show_magicians(magicians)
// EXERCISE 42
// let magicians: string[] = ["David Copperfield", "David Blaine", "Dynamo"];
// function make_great(magicians: string[]){
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great"
//     }
// }
// make_great(magicians)
// EXERCISE 43
var magicians = ["David Copperfield", "David Blaine", "Dynamo"];
function make_great(magicians) {
    var greatmagicians = [];
    magicians.forEach(function (magician) {
        greatmagicians.push("".concat(magician, " the Great"));
    });
    return greatmagicians;
}
var greatmagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great MAgicians:");
Show_magicians(greatmagicians);
