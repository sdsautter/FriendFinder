
const friendsArray = require("../data/friends.js");

module.exports = function(app) {
 
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
          var userFull = req.body;
          var userScores = req.body.scores;
          var matchIndex = 0;
          var tempScore = 0;
          var bestScore = 99;

        for (let i = 0; i < friendsArray.length; i++) {
            tempScore = 0;
            for (let j = 0; j < friendsArray[i].scores.length; j++) {
                tempScore += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userScores[j]));
            }
            if (tempScore < bestScore) {
                bestScore = tempScore;
                matchIndex = i;
            }
        }
        friendsArray.push(userFull);
        // We then display the JSON to the users
        res.json(friendsArray[matchIndex]);
    });
}
