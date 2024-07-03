"use strict";
let personalname = "Azhar";
console.log("lowercase:", personalname.toLowerCase());
console.log("uppercase:", personalname.toLocaleUpperCase());
console.log("tittlecase:", personalname.replace(/\bw/g, c => c.toUpperCase()));
