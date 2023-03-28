const TeamController = require('../controllers/bet.controller');

module.exports = app => {
    app.get('/api/teams', TeamController.findAllTeams);
    app.get('/api/teams/random', TeamController.findRandomTeam);
    app.get('/api/teams/:id', TeamController.findOneSingleTeam);
    app.put('/api/teams/:id', TeamController.updateExistingTeam);
    app.post('/api/teams', TeamController.createNewTeam);
    app.delete('/api/teams/:id', TeamController.deleteAnExistingTeam);
}