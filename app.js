var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/superhero');

///model for SuperPowers
mongoose.model(
    'Superpower',
    new Schema({
        "power_name": String
    },
    {
        collection: 'SuperPowers'
    }
));

var Superpower = mongoose.model('Superpower');

/// model for superheroes
mongoose.model(
    'Hero',
    new Schema({
        "alias": String,
        "first_name": String,
        "last_name": String,
        "city": String,
        "primary_power": String
    },
    {
        collection: 'Heroes'
    }
));

var Hero = mongoose.model('Hero');



app.get('/power', function(req, res) {
    console.log('POWER');
    Superpower.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

////

app.get('/hero', function(req, res) {
    console.log('HERO');
    Hero.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

////

app.post('/hero', function(req, res) {
    var addedHero = new Hero({
        alias: req.body.alias,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        primary_power: req.body.primary_power
    });

    addedHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});




// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
