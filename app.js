var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser =  require('body-parser');

var Team = require('./models/team');
var Player = require('./models/player');

mongoose.connect("mongodb://localhost/ingenius");
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.get('/teams/:teamid',function(req,res){
    Team.find({'team_id':req.params.teamid},function(err,team){
        if(err){
            console.log(err);
        }
        else{
            console.log(team[0]);
            res.send(team[0]);
        }
    });
});

app.get("/teamcount",function(req,res){
    Team.count({},function(err,count){
        if(err){
            console.log(err);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.send({count: count});
        }
    });
});

app.get('/leaderboard',function(req,res){
    Team.find({},['name','score'],{sort:{
        score: 1 //Sort by Date Added DESC
    }},function(err,result){
        res.send(result);
    });
});

//Junk Starts Here
app.post("/register",function(req,res){
    console.log(req.body);
    res.redirect('/');
});

app.post

app.get('/',function(req,res){
    res.send("Hey");
})
//Ends here

app.listen(8080,function(){
    console.log("Server Has Started");
});