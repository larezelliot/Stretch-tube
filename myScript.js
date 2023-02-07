function function_name(element) {
	var x = document.getElementById('searchInput');
	var y = document.getElementById('videoContainer');
	var z = x.value.split('=');
	if(z[1].length==11){
		x.remove();
		element.remove();
		y.classList.toggle('video');
		y.src = "https://www.youtube.com/embed/"+z[1]+
			"?autoplay=1&loop=1&modestbranding=1&autohide=1&controls=1&disablekb=1&iv_load_policy=3";
	}
}
