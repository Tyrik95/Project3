const Racer = require('../models/racer.model');

module.exports.findAllRacers = (req, res) => {
    Racer.find()
        .then((allRacers) => {
            res.json(allRacers)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneSingleRacer = (req, res) => {
    Racer.findOne({ _id: req.params.id })
        .then(oneSingleRacer => {
            res.json(oneSingleRacer)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.findRandomRacer = (req, res) => {
            Racer.find()
        .then((allRacers) => {
            res.json({ racers: allRacers[Math.floor(Math.random() * allRacers.length)]})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewRacer = (req, res) => {
    Racer.create(req.body)
        .then(newlyCreatedRacer => {
            res.json( newlyCreatedRacer )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingRacer = (req, res) => {
    Racer.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedRacer => {
            res.json({ racerRacer: updatedRacer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingRacer = (req, res) => {
    Racer.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}