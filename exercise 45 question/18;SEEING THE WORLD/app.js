var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// PRINT YOUR ARRAY IN ITS ORIGINAL ORDER ,
var places = ["cape town", "delhi", "faisalbad", "bankok", "ahmedabad"];
console.log("original:" + places);
// PRINT YOUR ARRAY IN ALPHABETICAL ORDER WHITOUT MODIFYING THE ACTUAL LIST,
console.log("copy:" + __spreadArray([], places, true).sort());
// SHOW THAT YOUR ARRAY IS STILL IN ITS ORIGINAL ORDER BY PRINTING IT,
console.log("original:" + places);
// PRINT YOUR ARRAY IN REVERSE ALPHABETICAL ORDER WITHOUT CHANGING THE ORDER OF THE ORIGINAL LIST,
console.log("copy:" + __spreadArray([], places, true).sort().reverse());
// SHOW THAT YOUR ARRAY IS STILL IN ITS ORIGINAL ORDER BY PRINTING IT AGAIN,
console.log("copy:" + __spreadArray([], places, true).sort().reverse());
// RECERSE THE ORDER OF YOUR LIST. PRINT THE ARRAY TO SHOW THAT ITS ORDER HAS CHANGE,
console.log("original:" + places.sort());
// REVERSE THE ORDER OF YOUR LIST AGAIN. PRINT THE LIST TO SHOW ITS BACK TI ITS ORIGINAL ORDER
console.log("original:" + places.sort().reverse());
// sort your array so its stored in alphabetical order. print the array to show that its order has been changed
console.log("copy:" + __spreadArray([], places, true).sort());
