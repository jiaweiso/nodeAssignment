var express = require('express');
//name space
var app = express();

var bodyParser = require('body-parser');
var YouTube = require("youtube-node");
var youtube = new YouTube();

youtube.setKey('AIzaSyCZefdm2fEDLphY-u6bo0a1Rvj4iEPSdrg');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));

app.set('view engine','ejs');

app.get('/',function(req,res) {

	var items = null, items2 = null,items3 = null,items4 = null;
	//youtube.addParam('type','playlist');
	youtube.search("Elton John",50,function(error, result) {
		if(error) {
			console.log(error);
		} else {
			//console.log(result.items[0].snippet.thumbnails);
			//users = JSON.stringify(result,null,10);
			items = result.items;	
		}

		youtube.search("Stevie Wonder",50,function(error, result) {
			if(error) {
				console.log(error);
			} else {
				//users2 = JSON.stringify(result,null,10).items;
				items2 = result.items;
			}

			youtube.search("Frank Sinatra",50,function(error, result) {
				if(error) {
					console.log(error);
				} else {
					items3 = result.items;
			//users3 = JSON.stringify(result,null,10).items;
				}
				youtube.search("Louis Armstrong",50,function(error, result) {
					if(error) {
						console.log(error);
					} else {		
						items4 = result.items;
					}

					var totalItems = [items,items2,items3,items4];

					res.render('default',{
						output: totalItems
					});

				});
			});
		});
	});


});

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

// app.get('/who/:name?',function(req,res){
// 	var name = req.params.name;
// 	res.send(name + 'here');
// })

app.get('*', function(req,res) {
	res.send("bad route");
})

var server = app.listen(36924,function(){
	console.log('Go to port 36924')

})