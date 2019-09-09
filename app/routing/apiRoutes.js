var friendList = require("..data/friend.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {
        var userScores = req.body.scores;
        var scoresArray = [];
        var bestFriend = 0;

        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;

            for (var a = 0; a < userScores.length; a++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[a]) - parseInt(userScores[a])));
            }

            scoresArray.push(scoresDiff);
        }

        for (var i = 0; i < scoresArray.length.length; i++) {
            if (scoresArray[i] <= scoresArray[bestFriend]) {
                bestFriend = i;
            }
        }

        var bff = friendlist[bestFriend];
        res.json(bff);

        friendList.push(req.body);

    });
}