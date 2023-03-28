const RacerController = require('../controllers/bet.controller');

module.exports = app => {
    app.get('/api/racers', RacerController.findAllRacers);
    app.get('/api/racers/random', RacerController.findRandomRacer);
    app.get('/api/racers/:id', RacerController.findOneSingleRacer);
    app.put('/api/racers/:id', RacerController.updateExistingRacer);
    app.post('/api/racers', RacerController.createNewRacer);
    app.delete('/api/racers/:id', RacerController.deleteAnExistingRacer);
}