var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var Bear = require('./models/bear');

var mongoose = require('mongoose');
mongoose.connect('mongodb://marko035:m1k945sog53@ds047762.mlab.com:47762/personnel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('MyApp'));

app.post('/users', function(req,res){
	var bear = new Bear();
        bear.name = req.body.name;
        bear.email = req.body.email;
        bear.phone = req.body.phone
        
        bear.save(function(err){
            if(err)
            res.send(err);
            
            res.json({message: 'Bear created!'});
        });

});

app.get('/users', function(req,res){
	Bear.find(function(err, bear){
            if(err)
            res.send(err);
            
            console.log(bear);
            res.json(bear);
        });
});

app.get('*', function(req,res){
	res.sendFile(__dirname + '/MyApp/index.html');
});

app.listen(1337, function(){
	console.log('Listening on port 1337');
});