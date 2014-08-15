/**
 * GET /
 * Home page.
 */

exports.getFlappyBoxerCopter = function(req, res) {
  var game = require('../flappyBoxerCopter/app.js');
  game.init();
  $( "canvas" ).on( "gameEnd", function(e) {
    console.log('game over')
  });
  $( "canvas").trigger( "gameEnd");
  res.render('flappyboxercopter', {
    title: 'Flappy Boxer Copter',
//    leaderboard: res.leaderboard
  });
};
