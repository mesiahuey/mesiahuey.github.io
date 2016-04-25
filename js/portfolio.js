function slideLeft()
{
	if(index + 1 == images.length)
	{
		index = 0;
	}
	else
	{
		index++;
	}
	
	if(index + 1 == images.length)
	{
		next = 0;
	}
	else
	{
		next = index + 1;
	}
	
	var focusedWrapper = document.getElementById('focused_image_wrapper');
	var focusedImage = document.getElementById('focused_image');
	
	focusedWrapper.removeChild(focusedImage);
	
	var newFocused = images[index].cloneNode();
	newFocused.id = 'focused_image';
	newFocused.className = '';
	focusedWrapper.appendChild(newFocused);
	
	var left = document.getElementsByClassName('slider_left')[0];
	left.parentNode.removeChild(left);
	//left.className = 'slider_left image_container hidden';
	
	/*
	window.setTimeout(function(){
		left.parentNode.removeChild(left);
	}, 500);
	*/
	
	var middle = document.getElementsByClassName('slider_middle')[0];
	middle.className = 'slider_left image_container';
	
	var right = document.getElementsByClassName('slider_right')[0];
	right.className = 'slider_middle image_container';
	
	div = getImage(next, 'slider_right');
	
	var wrapper = document.getElementById('slider_wrapper');
	wrapper.appendChild(div);
	
	window.setTimeout(function(){
		div.className = 'slider_right image_container visible';
	}, 100);
}

function getImage(next, style)
{
	var div = document.createElement('div');
	div.className = style + ' image_container hidden';
	
	div.appendChild(images[next]);
	
	return div;
}

function slideRight()
{
	if(index - 1 < 0)
	{
		index = images.length - 1;
	}
	else
	{
		index--;
	}
	
	if(index - 1 < 0)
	{
		next = images.length - 1 ;
	}
	else
	{
		next = index - 1;
	}
	
	var focusedWrapper = document.getElementById('focused_image_wrapper');
	var focusedImage = document.getElementById('focused_image');
	
	focusedWrapper.removeChild(focusedImage);
	
	var newFocused = images[index].cloneNode();
	newFocused.id = 'focused_image';
	newFocused.className = '';
	focusedWrapper.appendChild(newFocused);
	
	var right = document.getElementsByClassName('slider_right')[0];
	right.parentNode.removeChild(right);
	//right.className = 'slider_right image_container hidden';
	/*
	window.setTimeout(function(){
		right.parentNode.removeChild(right);
	}, 500);
	*/
	
	var middle = document.getElementsByClassName('slider_middle')[0];
	middle.className = 'slider_right image_container';
	
	var left = document.getElementsByClassName('slider_left')[0];
	left.className = 'slider_middle image_container';
	
	div = getImage(next, 'slider_left');
	
	var wrapper = document.getElementById('slider_wrapper');
	wrapper.appendChild(div);
	
	window.setTimeout(function(){
		div.className = 'slider_left image_container visible';
	}, 100);
}