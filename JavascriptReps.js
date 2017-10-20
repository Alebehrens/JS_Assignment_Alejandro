//Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
//Creating the variables:
var potato = 25
var banana = 25
//Putting the result on the console:
console.log(potato + banana);
//Doing the same with two strings:
var hello = "50"
var hey = "50"
//Putting the result on the console:
console.log(hello + hey);


//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
// Declaring the variables:
var football = ["barcelona","paris"];
var basketball = ["nba","wnba"];
var sports = [football , basketball];
//Declaring the multidimensional array:
var sports = [ ["barcelona","paris"], ["nba","wnba"] ];
//Outputting two of the items in sub-arrays to the console:
console.log(sports[1][0]);


//Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
//Declaring the varibale first:
var yolo = 20
//If statement:
if(yolo < 100) {
	alert("Your variable is less than 100");
} 
else{
	alert("your variable variable was 200 therefore, 200 is greater than 100");
}	


//Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function RandomName(name){
	return "You have entered the name: " + name;
}
//Calling the function:
console.log( RandomName("Alejandro"))


//Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
//declaring the function first:
function ChoosingDoors (YouSelected){
	//Applying the if statement:
	if(YouSelected === "door1"){
		alert('Chocolate!');
	}
	//Applying the if statement depending on the door the user selects:
	else if(YouSelected === "door2"){
		alert('A lot of cookies!');	
	}
	//Applying the if statement depending on the door the user selects:
	else if(YouSelected === "door3"){
		alert('An apple!');	
	}
	//Applying the if statement depending on the door the user selects:
	else{
		alert('Not the right door!');
	}
	console.log("YouSelected: ", YouSelected);
}
//Calling the function into action with four different values:
ChoosingDoors("door1");
ChoosingDoors("door2");
ChoosingDoors("door3");
ChoosingDoors("door4");

