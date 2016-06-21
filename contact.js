// belajar OOP;
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
};

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};

/*Create a search function
then call it passing "Jones"*/
function search(lastName){
    for (i = 0; i < contacts.length; i++){
        if (contacts[i].lastName == lastName){
            printPerson(contacts[i]);
        } else {
            console.log(lastName + " is not found.");
        }
    }
};

function add(firstName, lastName, email, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
}

var sarah = new Object();
sarah.add("Sarah", "O'Connor", "sarah@skynet.com", "0123");
contacts[contacts.length] = sarah;