//Question 18: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.

//Step no 1 :- Store the locations in the array. make sure the array is not in alphabeticalorder:
let favPlaces: string[] = ["Makkah" , "Madina" , "Iran" , "Iraq" , "Sham"];

// Print your array in its original order:
console.log("Array in its original order:", favPlaces);

//Print your array in alphabetical order without modifying the actual list:
console.log("Array in alphabetical order:", [...favPlaces].sort());

// Show that your array is still in its original order by painting it.
console.log("Array is still inoriginal order:", favPlaces);

//Print your array in reverse alphabetical order without changing the order of the original list:
console.log("Array in reverse alpjabetical order:", [... favPlaces].reverse());

//Show that your array is still in its original order by printing it again.
console.log("Array is still in original order:", favPlaces);

//Reverse the original order of your list. Print the array to show that its order has changed
console.log("Reverse order of your list:", favPlaces.reverse());

//Reverse the order of your list again. Print the list to show its back to its original order
console.log("Back to its original order:", favPlaces.reverse());

//Sort your array to its stored in alphabetical order. print the array to show that its order has been changed.
console.log("Storing array to store in alphabetical order:", favPlaces.sort());

//Sort to change your array to its stored in reverse alphabetical order. print the list to show that its order has changed
console.log("Stored in reverse alphabetical order:", favPlaces.reverse());
