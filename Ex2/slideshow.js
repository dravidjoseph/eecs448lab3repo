

function previous(){
	
	var image = document.getElementById('myImgId')
	if(image.src.match('Photo1')){
		image.src = 'Photo5.jpg'
	}
	else if(image.src.match('Photo2')){
		image.src = 'Photo1.jpg'
	}
	else if(image.src.match('Photo3')){
		image.src = 'Photo2.jpg'
	}
	else if(image.src.match('Photo4')){
		image.src = 'Photo3.jpg'
	}
	else{
		image.src = 'Photo4.jpg'
	}
}


function next(){
	
	var image = document.getElementById('myImgId')
	if(image.src.match('Photo1')){
		image.src = 'Photo2.jpg'
	}
	else if(image.src.match('Photo2')){
		image.src = 'Photo3.jpg'
	}
	else if(image.src.match('Photo3')){
		image.src = 'Photo4.jpg'
	}
	else if(image.src.match('Photo4')){
		image.src = 'Photo5.jpg'
	}
	else{
		image.src = 'Photo1.jpg'
	}
		
	
}