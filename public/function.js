
function changeDisplay(val) {
	var ids = ["option1","option2","option3","option4"];
	for(var i = 0; i < ids.length; i++) {
		if(ids[i] != val) {
			document.getElementById(ids[i]).style.display = "none";
		} else {
			document.getElementById(val).style.display = "block";
		}
	}
}
function previousPage() {
	var e = document.getElementById("artist");
	var selectedArtist = e.options[e.selectedIndex].value;

	var currentPage = document.getElementById(selectedArtist+" currentPage").innerHTML;
	if(currentPage > 0) {
		document.getElementById(selectedArtist+" page"+currentPage).style.display = "none";
		var prev = parseInt(currentPage,10)-1;
		document.getElementById(selectedArtist+" page"+prev).style.display = "block";
		document.getElementById(selectedArtist+" currentPage").innerHTML = prev;
	}
}

function nextPage() {
	var e = document.getElementById("artist");
	var selectedArtist = e.options[e.selectedIndex].value;

	var currentPage = parseInt(document.getElementById(selectedArtist+" currentPage").innerHTML,10);
	var total = parseInt(document.getElementById(selectedArtist+" totalPage").innerHTML,10);
	if(currentPage < total) {
		document.getElementById(selectedArtist+" page"+currentPage).style.display = "none";
		var next = currentPage+1;
		document.getElementById(selectedArtist+" page"+next).style.display = "block";
		document.getElementById(selectedArtist+" currentPage").innerHTML = next;
	}
}

