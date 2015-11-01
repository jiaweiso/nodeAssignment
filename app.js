var express = require('express');
//name space
var bodyParser = require('body-parser');
var YouTube = require("youtube-node");
var youtube = new YouTube();

youtube.setKey('AIzaSyCZefdm2fEDLphY-u6bo0a1Rvj4iEPSdrg');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');

app.get('/',function(req,res) {
	res.render('default',{
		title:'Home',
		users:[
		{	"value" : "Elton John",
			"selected" : "aaa"
		},
		{
			"value" : "Stevie Wonder",
			"selected" : "bb"
		},
		{ 
			"value" : "Frank Sinatra",
			"selected" : "cc"
		},
		{
			"value" : "Louis Armstrong",
			"selected" : "dd"
		}
		]
	});

})

app.post('/test',function(req,res) {

	youtube.addParam('type','playlist');
	youtube.search(req.body.artist,10,function(error, result) {
		if(error) {
			console.log(error);
		} else {
			console.log(JSON.stringify(result,null,10));
		}
	})

	res.send(req.body.artist);
})

app.get('/who/:name?',function(req,res){
	var name = req.params.name;
	res.send(name + 'here');
})

app.get('*', function(req,res) {
	res.send("bad route");
})

var server = app.listen(36924,function(){
	console.log('success')

})