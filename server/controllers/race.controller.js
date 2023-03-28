const Match = require('../models/matchr.model');

module.exports.findAllMatches = (req, res) => {
    Match.find()
        .then((allMatches) => {
            res.json(allMatches)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneSingleMatch = (req, res) => {
    Match.findOne({ _id: req.params.id })
        .then(oneSingleMatch => {
            res.json(oneSingleMatch)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.findRandomMatch = (req, res) => {
            Match.find()
        .then((allMatches) => {
            res.json({ matches: allMatches[Math.floor(Math.random() * allMatches.length)]})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewMatch = (req, res) => {
    Match.create(req.body)
        .then(newlyCreatedMatch => {
            res.json( newlyCreatedMatch )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingMatch = (req, res) => {
    Match.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMatch => {
            res.json({ matchMatch: updatedMatch })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingMatch = (req, res) => {
    Match.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}