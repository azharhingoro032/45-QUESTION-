// PRINT YOUR ARRAY IN ITS ORIGINAL ORDER ,
let places : string [] = ["cape town", "delhi", "faisalbad", "bankok", "ahmedabad"]
console.log("original:" + places);

// PRINT YOUR ARRAY IN ALPHABETICAL ORDER WHITOUT MODIFYING THE ACTUAL LIST,
console.log("copy:" + [...places].sort());

// SHOW THAT YOUR ARRAY IS STILL IN ITS ORIGINAL ORDER BY PRINTING IT,
console.log("original:" + places);

// PRINT YOUR ARRAY IN REVERSE ALPHABETICAL ORDER WITHOUT CHANGING THE ORDER OF THE ORIGINAL LIST,
console.log("copy:" + [...places].sort().reverse());

// SHOW THAT YOUR ARRAY IS STILL IN ITS ORIGINAL ORDER BY PRINTING IT AGAIN,
console.log("copy:" + [...places].sort().reverse());

// RECERSE THE ORDER OF YOUR LIST. PRINT THE ARRAY TO SHOW THAT ITS ORDER HAS CHANGE,
console.log("original:" + places.sort());

// REVERSE THE ORDER OF YOUR LIST AGAIN. PRINT THE LIST TO SHOW ITS BACK TI ITS ORIGINAL ORDER
console.log("original:" + places.sort().reverse());

// sort your array so its stored in alphabetical order. print the array to show that its order has been changed
console.log("copy:" + [...places].sort());

