//Question 16: More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.

//Creating a guest list array:
let myGuestName = ["Awais" , "manan" , "mohsin"];

//Making variable for those who cannot come:
let dontCome = myGuestName[1];

//printing the name of guest who connot come:
console.log(dontCome, "nahi aa sakta :(");

//Add or reove guest from guest names:
myGuestName.splice(1, 1, "Awais");

//Message print for bigger table;
console.log("Good news! we have made a big dinner table!");

//Adding a new guest at starting of index of array:
myGuestName.unshift("ahmed");

//Adding a new guest at end of the array:
myGuestName.push("bilal");

//Get a middle index of myGuestName array:
let middleIndex: number = (myGuestName.length / 2);

//Adding a new guest to middle of index of the array:
myGuestName.splice(middleIndex, 1, "tahir");

//Print a message of updated list:
console.log("updated list of our guests name");

//Sending invitation message to our guest:
myGuestName.forEach(oneGuest => console.log(`"salam! ${oneGuest}, wanna have dinner with me?`));