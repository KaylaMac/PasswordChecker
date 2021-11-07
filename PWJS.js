check.onclick= function(){
	var input= document.getElementById("pw").value;	//take what the user types into the password box
	const chars= [...input];	       //use the input to create an array of characters

	//functions containsSymbol and hasInt are defined below
	//a message is displayed for the user, prompting them to resolve the issue with their password if an issue is found
	//the message displayed depends on what the password is lacking 
	if(chars.length == 10 && chars.containsSymbol() && chars.hasInt()){
		document.getElementById("out").innerHTML= "Password is strong.";	   //if there are no issues, then the password is strong enough
	}else if(chars.length < 10 && chars.containsSymbol() && chars.hasInt()){
		document.getElementById("out").innerHTML= "Password is too short.";
	}else if(chars.length == 10 && !chars.containsSymbol() && chars.hasInt()){
		document.getElementById("out").innerHTML= "Password must contain a special character.";
	}else if(chars.length == 10 && chars.containsSymbol() && !chars.hasInt()){
		document.getElementById("out").innerHTML= "Password must contain an integer.";
	}else{
		document.getElementById("out").innerHTML= "Password is too weak. You have not fulfilled all of the requirements.";	     // if there is more than one problem with the user's password, a more general message is displayed
	}
};


// This function checks if there is at least one integer in the password. If a number (0-9) is detected, then the function returns true. If the index of all ten integers is -1, that means there were no integers detected and the function will return false. 
Array.prototype.hasInt= function(){
	if(this.indexOf("1") == -1 && this.indexOf("2") == -1 && this.indexOf("3") == -1 && this.indexOf("4") == -1 && this.indexOf("5") == -1 && this.indexOf("6") == -1 && this.indexOf("7") == -1 && this.indexOf("8") == -1 && this.indexOf("9") == -1 && this.indexOf("0") == -1){
		return false;
	}else{
		return true;
	}
};

//This function checks if there is at least one special character. Similar to what occurs in the hasInt() function, the array of characters is traversed to determine if it contains any of the special characters. If the index of all of the characters is -1, then no symbols were detected and the function will return false. 
Array.prototype.containsSymbol= function(){
	if(this.indexOf("!") == -1 && this.indexOf("$") == -1 && this.indexOf("#") == -1 && this.indexOf("&") == -1 && this.indexOf("?") == -1){
		return false;
	}else{
		return true;
	}
};