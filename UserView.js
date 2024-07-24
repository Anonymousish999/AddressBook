let addressService = require("./AddressService");
let read = require("readline-sync");

while (true) {
  let option = read.question(
    "Enter 1 to create a new user, 2 to retrieve a user, 3 to update a user, 4 to delete a user: "
  );

  if (option === "1") {
    // Create a new user
    addressService.createUser();
  } else if (option === "2") {
    // Retrieve a user by phone number
    let phoneNumber = "";
    phoneNumber = read.question("Enter your phone number: ");
    addressService.retriveUser(phoneNumber);
  } else if (option === "3") {
    // Update a user
    let name = read.question("Enter your name: ");
    let age = read.question("Enter your age: ");
    let street = read.question("Enter your street: ");
    let city = read.question("Enter your city: ");
    let zipCode = read.question("Enter your zip code: ");
    let phoneNumber = read.question("Enter your phone number: ");
    let email = read.question("Enter your email: ");
    let state = read.question("Enter your state: ");

    addressService.updateUser(
      name,
      age,
      street,
      city,
      zipCode,
      phoneNumber,
      email,
      state
    );
  } else if (option === "4") {
    // Delete a user
    let nameForDelete = read.question(
      "Enter the name of the user for deleting: "
    );

    addressService.deleteUser(nameForDelete);
  } else {
    console.log("Invalid option");
    break;
  }
}
