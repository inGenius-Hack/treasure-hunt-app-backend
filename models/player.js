const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var playerSchema = new mongoose.Schema({
    name: String,
    email: String,
    usn: String,
    team_id: String    
});

var Player = mongoose.model("player",playerSchema);
module.exports = Player;