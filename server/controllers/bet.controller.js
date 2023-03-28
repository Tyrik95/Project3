const Bet = require('../models/bet.model');

module.exports.findAllBets = (req, res) => {
    Bet.find()
        .then((allBets) => {
            res.json(allBets)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneSingleBet = (req, res) => {
    Bet.findOne({ _id: req.params.id })
        .then(oneSingleBet => {
            res.json(oneSingleBet)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.findRandomBet = (req, res) => {
            Bet.find()
        .then((allBets) => {
            res.json({ bets: allBets[Math.floor(Math.random() * allBets.length)]})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewBet = (req, res) => {
    Bet.create(req.body)
        .then(newlyCreatedBet => {
            res.json( newlyCreatedBet )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingBet = (req, res) => {
    Bet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedBet => {
            res.json({ betBet: updatedBet })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingBet = (req, res) => {
    Bet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}