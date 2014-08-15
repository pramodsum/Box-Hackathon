/**
 * GET /
 * Home page.
 */

exports.getCloudRunner = function(req, res) {
  res.render('CloudRunner', {
    title: 'CloudRunner',
//    leaderboard: res.leaderboard
  });
};
