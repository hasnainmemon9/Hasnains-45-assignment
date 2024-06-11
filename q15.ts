//Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.

//Guest names:
let guestName = ["mohsin" , "manan" , "kabeer"];

//The number of guest who is coming:
let dontcome = guestName[1];

//Printing message who is not coming:
console.log(dontcome, "nahi  a sakta :(");

//Adding name instead of guest number 1:
guestName.splice(1, 1, "Awais");

//Printing message:
guestName.forEach(guest => console.log(`"salam! ${guest}, wanna have dinner with me?"`));