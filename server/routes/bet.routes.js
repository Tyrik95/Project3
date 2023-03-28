const BetController = require('../controllers/bet.controller');

module.exports = app => {
    app.get('/api/bets', BetController.findAllBets);
    app.get('/api/bets/random', BetController.findRandomBet);
    app.get('/api/bets/:id', BetController.findOneSingleBet);
    app.put('/api/bets/:id', BetController.updateExistingBet);
    app.post('/api/bets', BetController.createNewBet);
    app.delete('/api/bets/:id', BetController.deleteAnExistingBet);
}