

function verify(){
	
	
	var firstPassword = document.getElementById("pass1").value
	var secondPassword = document.getElementById("pass2").value
	
	if(firstPassword.length < 8 || secondPassword.length < 8){
		
		window.alert('Your password is not 8 characters long')
		
	}
	else{
		
		if(firstPassword != secondPassword){
			window.alert('Passwords do not match!')
		}
		else{
			window.alert('Passwords match!')
		}
		
		
	}
}