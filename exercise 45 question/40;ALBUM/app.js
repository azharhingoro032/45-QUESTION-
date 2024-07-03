function Make_AlBum(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var album1 = Make_AlBum("ali", "Rang-e-Mohabat");
var album2 = Make_AlBum("Madad", "RoshanAndhera");
var album3 = Make_AlBum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// numberoftracks
function Make_AlBum2(artistname, albumtitle, NumberofTrack) {
    return { artistname: artistname, albumtitle: albumtitle, NumberofTrack: NumberofTrack };
}
var album4 = Make_AlBum2("ali", "dil hai", 30);
var album5 = Make_AlBum2("Madad", "ajeeb kahani", 55);
var album6 = Make_AlBum2("Kumar Sanu", "Dil Ka Aalam", 12);
console.log(album4);
console.log(album5);
console.log(album6);
