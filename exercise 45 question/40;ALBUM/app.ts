function Make_AlBum(artistname:string, albumtitle: string){
    return {artistname, albumtitle}
}

let album1 = Make_AlBum("ali", "Rang-e-Mohabat")
let album2 = Make_AlBum("Madad", "RoshanAndhera")
let album3 = Make_AlBum("Ayaz", "Mausam-e-Dil")

console.log(album1);
console.log(album2);
console.log(album3);
// numberoftracks

function Make_AlBum2(artistname:string, albumtitle: string, NumberofTrack: number){
    return {artistname, albumtitle, NumberofTrack}
}

let album4 = Make_AlBum2("ali", "dil hai", 30)
let album5 = Make_AlBum2("Madad", "ajeeb kahani", 55)
let album6 = Make_AlBum2("Kumar Sanu", "Dil Ka Aalam", 12)

console.log(album4);
console.log(album5);
console.log(album6);
