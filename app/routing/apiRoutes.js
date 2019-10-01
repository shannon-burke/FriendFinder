var friendList = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (_req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
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

        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestFriend]) {
                bestFriend = i;
            }
        }

        var bff = friendList[bestFriend];
        res.json(bff);

        friendList.push(req.body);

    });
}