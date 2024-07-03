"use strict";
// EXERCISE 2
let personalmessage = " Eric";
console.log(`Hello${personalmessage}, would you like to learn some python today?`);
// EXERCISE 3
let personalname = "Azhar";
console.log("lowercase:", personalname.toLowerCase());
console.log("uppercase:", personalname.toLocaleUpperCase());
console.log("tittlecase:", personalname.replace(/\bw/g, c => c.toUpperCase()));
// EXERCISE 4
let qoute = "a person who never made a mistake never tried anything new";
let authore = "Albert Einstein";
console.log(`${authore} once said, "${qoute}`);
// EXERCISE 5
let qoute1 = "a person who never made a mistake never tried anything new";
let famous_person = "Albert Einstein";
console.log(`${famous_person} once said, "${qoute}`);
