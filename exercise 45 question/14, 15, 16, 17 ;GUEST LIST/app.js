//   EXERCISE 14
// GUEST LIST
var guest_list = ["ali", "farhan", "raza", "ayesha"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respeted GUYS:" + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\n THANK YOU");
}
// EXERCISE 15
// CHANGE 1 GUY IN  GUEST LIST 
var no_present = "farhan";
var new_guest = "babar azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respeted GUYS:" + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\n THANK YOU");
}
console.log("Mr. ".concat(no_present, " will not coming tomorrow dinner."));
// EXERCISE 16
// ADD 3 GUYS IN GUEST LIST 
guest_list.unshift("shaheen", "sarfaraz", 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respeted GUYS:" + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\n THANK YOU");
}
console.log("\nUnfortunately we can not arrange big table , Only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respeted GUYS:" + guest_list[i] + ",\nYes you are still invited you on dinner tomorrow.\n\n THANK YOU");
}
guest_list.splice(0, 2);
console.log(guest_list);
