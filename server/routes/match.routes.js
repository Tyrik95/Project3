const MatchController = require('../controllers/match.controller');

module.exports = app => {
    app.get('/api/matches', MatchController.findAllMatches);
    app.get('/api/matches/random', MatchController.findRandomMatch);
    app.get('/api/matches/:id', MatchController.findOneSingleMatch);
    app.put('/api/matches/:id', MatchController.updateExistingMatch);
    app.post('/api/matches', MatchController.createNewMatch);
    app.delete('/api/matches/:id', MatchController.deleteAnExistingMatch);
}