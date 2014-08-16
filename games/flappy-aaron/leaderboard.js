function showScores() {
  // table options
  var table = {
    table: "cloudrunner",
    page: 1,
    perpage: 5,
    highest: true
  };
  
    Playtomic.Leaderboards.list(table, listComplete);
}

function listComplete(scores, numscores, response) {
    if(response.success) {
        console.log(scores.length + " scores returned out of " + numscores);

        for(var i=0; i<scores.length; i++) {
            var score = scores[i];
            console.log(" - " + score.name + " got " + score.points + " on " + score.sdate);
        }
    } else {
        return console.log("something went wrong: " + response.errormessage);
    }
}