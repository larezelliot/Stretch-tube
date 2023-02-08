
/*
	Saves the video ID and save it. Then change html index. 
*/
function search_Id(element) {
	var inputLink = document.getElementById('searchInput').value;
	id = getVideoID(inputLink);
	if(id){
		var src = "https://www.youtube.com/embed/"+id+
			"?autoplay=1"+
			"&loop=1"+
			"&modestbranding=1"+
			"&autohide=1"+
			"&controls=1"+
			"&disablekb=1"+
			"&iv_load_policy=3";
		localStorage.setItem('source_', src);
		window.location.href = 'index.html';	
	}
	else{
		alert('Please, follow one of the formats: \n1) https://www.youtube.com/watch?v=5LhpFA6RPMI\n2) 5LhpFA6RPMI');
	}	
}

/*
	Receives a youtube link, and returns the Youtube Video ID
	https://www.youtube.com/watch?v=5LhpFA6RPMI -> 5LhpFA6RPMI 
*/
function getVideoID(link){
	arr = link.split('=');
	if(arr.length==1)
		id = arr[0];
	if(arr.length==2)
		id = arr[1];
	if(id.length==11)
			return id;
	return null;
}

/*
	Defines the source of the video
*/
function defineVideoSource() {
	var src = localStorage.getItem('source_');
	document.getElementById('video1').src = src;
}