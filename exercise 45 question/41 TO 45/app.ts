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
// let magicians: string[] = ["David Copperfield", "David Blaine", "Dynamo"];

// function make_great(magicians: string[]): string[] {
//     let greatmagicians = [];
//     magicians.forEach(magician => {
//         greatmagicians.push(`${magician} the Great`)
//     });
//     return greatmagicians;
// }

// let greatmagicians = make_great(magicians.slice());
// console.log("Original Magicians:");
// show_magicians(magicians);
// console.log("Great MAgicians:");
// Show_magicians(greatmagicians)

// EXERCISE 44
// function make_sandwich(...items: string[]) {
//     console.log(`Making a sandwich with: ${items.join(', ')}`);
    
// }

// make_sandwich("ham", "cheese");
// make_sandwich("tomato", "ketchup", "lettuce");
// make_sandwich("avocado", "sprouts", "mustard", "mayo")

// EXERCISE 45
// function make_car(manufacturer: string, model: string, ...options [string, any][]): object{
//     let car = {manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }

// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
