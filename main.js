var xmlhttp;
function search() {
	console.log('111');
	var a = document.getElementById('test').value;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = handleReply;
	xmlhttp.open("POST","/test",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('content='+a);
}

function handleReply() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		if(xmlhttp.responseText == "error") {
			alert("update failed");
		}
		else {
			document.getElementById('result').value  = xmlhttp.responseText;
				
		}	
	}
}