// LOAD DATA
// This is the link connecting the routes 
var friends = require("../data/friends");

//ROUTING
module.exports = function(app){
    //API GET requests
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })
    //API POST Requests
    // Add new friend
	app.post("/api/friends", function(req, res) {
        //user input of new friends added to the list
        var addedfriendScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        for(var i = 0; i < friends.length; i++){
            var scoresDiff = 0;
            for(var j = 0; j < addedfriendScores.length; j++){
                scoresDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(addedfriendScores[j]));
            }
            scoresArray.push(scoresDiff);
        }
        for(var i = 0;i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }
        var compatibleFriends = friends[bestMatch];
        res.json(compatibleFriends);
        friends.push(req.body);
	});
};