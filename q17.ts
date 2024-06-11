//Question 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

//Creating a guest list array:
let guestName = ["Awais" , "Manan" , "Mohsin"];

//Making variable for those who cannot come:
let dontcome = guestName[1];

//Printing the name of guest who cannot come:
console.log(dontcome, "Nahi Aa sakta :(");

//Add or remove guest from guest name:
guestName.splice(1, 1, "kabeer");

//Message print for bigger table;
console.log("Good news! we have made a big dinner table!");

//Adding a new guest at starting index of array:
guestName.unshift("Ahmed");

//Adding a new guest at the end or array:
guestName.push("Bilal");

//Get a middle text of guestName array:
let middleName: number = (guestName.length / 2);

//Adding a new guest to middle of the index of the array
guestName.splice(middleName, 1, "Tahir");

//Print message of updated list:
console.log("updated list of our guests name");

//Sending invitation message to our guest:
guestName.forEach(oneGuest => console.log(`"Salam! ${oneGuest}, wanna have dinner with me?"`));

//Iforming that only two people can come to dine:
console.log("Unfortunately, the new dinnig tale would not to arrive at time, so I can invite only two guest to dine with me");

//Using while loop to remove the guest from the array until any two names remains:
while(guestName.length > 2){
    let removedGuest = guestName.pop();
    console.log(`soory! ${removedGuest}, I cant invite you to dinner:(`);
};

//Sending invitation to the guest who are still invited:
console.log("Invitation to the last two guest");

//Printing message who are invited:
guestName.forEach(lasttwo => console.log(`fortunately! ${lasttwo}, you are still invited to dine with me:)`));

//Removing the rest of guest:
guestName.pop();
guestName.pop();

console.log("Empty list:", guestName);