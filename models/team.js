const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamSchema = new mongoose.Schema({
    team_id: String,
    name: String,
    level: Number,
    score: Number,
    sessions: Number
});

var Team = mongoose.model("team",teamSchema);
module.exports = Team;