export function writeToScreen() {
	document.write('Hello world from Rohan super');
}

export let people = [
	{name: 'John Doe'},
	{name: 'Steve Smith '},
	{name: 'Carol Williams'}
]	

// Testing babel
var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());