function modify(){
	//access the paragraph
	var paragraph = document.getElementById("lorem")
	   
	//access RGB values for border, as well as width
	var bRed = document.getElementById("red").value
	var bGreen = document.getElementById("green").value
	var bBlue = document.getElementById("blue").value
	var borderWidth = document.getElementById("width").value
		
		
	//access RGB values for background color
	var bcRed = document.getElementById("bcRed").value
	var bcGreen = document.getElementById("bcGreen").value
	var bcBlue = document.getElementById("bcBlue").value
	   
	//apply border color and border width
	paragraph.style.borderColor = "rgb("+bRed+","+bGreen+","+bBlue+")"
	paragraph.style.borderWidth = borderWidth+"px"

		
	//apply background color to paragraph	
	paragraph.style.backgroundColor = "rgb("+bcRed+","+bcGreen+","+bcBlue+")"
}